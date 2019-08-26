import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from 'react-navigation';
import SavedContainer from './SavedContainer';
import ProfileContainer from './ProfileContainer';
// import NavigationUtil from '../navigators/NavigationUtil';

export default createMaterialTopTabNavigator({
  SavedContainer: {
    screen: SavedContainer,
    tabBarLabel: 'SavedContainer',
  },
  ProfileContainer: {
    screen: ProfileContainer,
    tabBarLabel: 'ProfileContainer',
  },
});
