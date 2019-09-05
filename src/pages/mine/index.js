import React, {Component} from 'react';
import {Image, ScrollView, View, Text, StyleSheet} from 'react-native';
import Swiper from 'react-native-swiper';
import {List} from '@ant-design/react-native';
const Item = List.Item;
const Brief = Item.Brief;
export class Mime extends Component {
  render() {
    return (
      <Swiper style={styles.wrapper} showsButtons={true} loop>
        <View style={styles.slide1}>
          <Image
            source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
            style={{width: 400, height: 400}}
          />
        </View>
        <View style={styles.slide2}>
          <Image
            source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
            style={{width: 400, height: 400}}
          />
        </View>
        <View style={styles.slide3}>
          <Image
            source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
            style={{width: 400, height: 400}}
          />
        </View>
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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

export default Mime;
