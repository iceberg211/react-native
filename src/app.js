import React, {Component} from 'react';
import {Provider} from 'react-redux';
import initializeStore from './store';
import AppNavigator from './navigators/AppNavigator';
import {Text, View, StyleSheet, FlatList, ScrollView} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <Provider store={initializeStore()}>
        <AppNavigator />
      </Provider>
    );
  }
}
