import React, {Component} from 'react';
import {Provider} from 'react-redux';
import configureStore from './store';
import test from './test';
import {Image, ScrollView, View} from 'react-native';
// const {store} = configureStore();

export default class App extends Component {
  state = {loading: true};

  render() {
    // const { loading } = this.state;
    return <View>{test}</View>;
  }
}
