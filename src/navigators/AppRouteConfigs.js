import React from 'react';
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import {connect} from 'react-redux';
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import SettingsScreen from './pages/settingsScreen';
import HomeScreen from './pages/home';
import Mine from './pages/mine';

// 聚合路由
const App = reduxifyNavigator(AppRouteConfigs, 'root');

const mapStateToProps = state => ({
  state: state.nav,
});

const AppWithNavigationState = connect(mapStateToProps)(App);
const Root = () => <AppWithNavigationState />;

export default Root;
