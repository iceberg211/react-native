import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  ActivityIndicator,
} from 'react-native';
import {connect} from 'react-redux';
import {
  createMaterialTopTabNavigator,
  createAppContainer,
} from 'react-navigation';

import {Card} from '@ant-design/react-native';

const {Header, Body, Footer} = Card;

const mapStateToProps = state => ({
  github: state.github,
  isLoading: state.loading.effects.github.fetchPopular,
});

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

class PopulaTab extends Component {
  constructor(props) {
    super(props);
    this.state = {chosenDate: new Date()};
  }

  componentDidMount() {
    const {dispatch} = this.props;
    dispatch({type: 'github/fetchPopular'});
  }

  renderBanner = banners => {
    return banners.map(({image_url}) => (
      <View>
        <Image key={image_url} source={image_url} />
      </View>
    ));
  };

  render() {
    const {github, isLoading} = this.props;
    const {react} = github;
    return (
      <View style={styles.wrapper}>
        <FlatList
          onEndReachedThreshold={0.5}
          data={react}
          renderItem={({item, index, separators}) => {
            return <PopulItem key={item.id} data={item} />;
          }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
  },
  carousel: {
    height: 150,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default connect(mapStateToProps)(PopulaTab);
