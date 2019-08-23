import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from 'react-navigation';
import SavedContainer from './SavedContainer';
import ProfileContainer from './ProfileContainer';
// import NavigationUtil from '../navigators/NavigationUtil';

export default class InboxContainer extends Component {
  tabNavigation() {
    return createMaterialTopTabNavigator({
      SavedContainer,
      ProfileContainer,
    });
  }
  render() {
    // NavigationUtil.navigator = this.props.navigator;
    return this.tabNavigation();
  }
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    padding: 50,
  },
});
