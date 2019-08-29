import React, {PureComponent} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import {connect} from 'react-redux';

import {Card} from '@ant-design/react-native';

const {Header, Body, Footer} = Card;

const PopulItem = ({data}) => (
  <Card>
    <Header title={data.name} />
    <Body>
      <View style={{height: 42}}>
        <Text style={{marginLeft: 16}}>全称:{data.full_name}</Text>
        <Text style={{marginLeft: 16}}>语言:{data.language}</Text>
        <Text style={{marginLeft: 16}}>点赞数:{data.watchers}</Text>
      </View>
    </Body>
    <Footer content="fork数" extra={data.forks} />
  </Card>
);

class PopulaTab extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.tabLabel || 'React',
    };
  }

  componentDidMount() {
    const {dispatch} = this.props;
    dispatch({
      type: 'github/fetchPopular',
      payload: {
        name: this.state.name,
      },
    });
  }

  renderBanner = banners => {
    return banners.map(({image_url}) => (
      <View>
        <Image key={image_url} source={image_url} />
      </View>
    ));
  };

  genIndicator() {
    return !this.props.isLoading ? null : (
      <View style={styles.indicatorContainer}>
        <ActivityIndicator style={styles.indicator} />
        <Text>正在加载更多</Text>
      </View>
    );
  }

  onRefresh = () => {
    console.log('onRefresh');
  };

  render() {
    const {github, isLoading, tabLabel} = this.props;
    // const {name} = this.state;
    let data = github[tabLabel];

    if (!data) {
      data = [];
    }

    return (
      <View style={styles.wrapper}>
        <FlatList
          onEndReachedThreshold={0.5}
          data={data}
          renderItem={({item, index, separators}) => {
            return <PopulItem key={item.id} data={item} />;
          }}
          refreshing={isLoading}
          keyExtractor={item => `${item.id}`}
          ListFooterComponent={() => this.genIndicator()}
          onRefresh={
            <RefreshControl
              title={'Loading'}
              refreshing={isLoading}
              onRefresh={this.onRefresh}
            />
          }
          onEndReached={() => {
            console.log('---onEndReached----');
            // setTimeout(() => {
            //   if (this.canLoadMore) {
            //     //fix 滚动时两次调用onEndReached https://github.com/facebook/react-native/issues/14015
            //     this.loadData(true);
            //     this.canLoadMore = false;
            //   }
            // }, 100);
          }}
          onMomentumScrollBegin={() => {
            console.log('---onMomentumScrollBegin-----');
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabStyle: {
    // minWidth: 50 //fix minWidth会导致tabStyle初次加载时闪烁
    padding: 0,
  },
  indicatorStyle: {
    height: 2,
    backgroundColor: 'white',
  },
  labelStyle: {
    fontSize: 13,
    margin: 0,
  },
  indicatorContainer: {
    alignItems: 'center',
  },
  indicator: {
    color: 'red',
    margin: 10,
  },
});

const mapStateToProps = state => ({
  github: state.github,
  isLoading: state.loading.effects.github.fetchPopular,
});

export default connect(mapStateToProps)(PopulaTab);
