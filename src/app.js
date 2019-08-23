import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {StatusBar} from 'react-native';
import initializeStore from './store';
import Root from './navigators/AppNavigator';

StatusBar.setBarStyle('light-content', true);

export default class App extends Component {
  render() {
    return (
      <Provider store={initializeStore()}>
        <Root />
      </Provider>
    );
  }
}
