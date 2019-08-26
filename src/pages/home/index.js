import React, {Component} from 'react';
import {Text, View, StyleSheet, FlatList, Image} from 'react-native';
import {connect} from 'react-redux';
import {Carousel, Icon} from '@ant-design/react-native';

const mapStateToProps = state => ({
  home: state.home,
});

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {chosenDate: new Date()};
  }

  componentDidMount() {
    const {dispatch} = this.props;
    dispatch({type: 'home/fetchIndex'});
  }
  onHorizontalSelectedIndexChange(index) {
    /* tslint:disable: no-console */
    console.log('horizontal change to', index);
  }

  onVerticalSelectedIndexChange(index) {
    /* tslint:disable: no-console */
    console.log('vertical change to', index);
  }

  renderBanner = banners => {
    return banners.map(({image_url}) => (
      <View>
        <Image key={image_url} source={image_url} />
      </View>
    ));
  };

  render() {
    const {banner} = this.props.home;
    console.log(this.props);

    return (
      <View style={styles.wrapper}>
        <Carousel autoplay infinite style={styles.carousel}>
          {this.renderBanner(banner)}
        </Carousel>
        <FlatList
          data={[
            {key: 'Devin'},
            {key: 'Dan'},
            {key: 'Dominic'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
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
    // flexGrow: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    height: 150,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
export default connect(mapStateToProps)(HomeScreen);
