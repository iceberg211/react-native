import React from 'react';
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './pages/home';
import SettingsScreen from './pages/settingsScreen';
import Mine from './pages/mine';
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import {connect} from 'react-redux';

// 路由中间件结合
const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav,
);

// 聚合路由
const App = reduxifyNavigator(AppRouteConfigs, 'root');

const mapStateToProps = state => ({
  state: state.nav,
});

const AppWithNavigationState = connect(mapStateToProps)(App);
const Root = () => <AppWithNavigationState />;

export default Root;
