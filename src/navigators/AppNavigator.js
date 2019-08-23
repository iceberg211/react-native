import React, {PureComponent} from 'react';
import {BackHandler} from 'react-native';
import {connect} from 'react-redux';
import {
  createReduxContainer,
  createReactNavigationReduxMiddleware,
  createNavigationReducer,
} from 'react-navigation-redux-helpers';
import {NavigationActions} from 'react-navigation';
import AppNavigator from './AppRouteConfigs';

export const reactNavigationReduxMiddleware = createReactNavigationReduxMiddleware(
  state => state.nav,
);

export const routerReducer = createNavigationReducer(AppNavigator);

const App = createReduxContainer(AppNavigator);

const mapStateToProps = state => ({
  state: state.nav,
});

export default connect(mapStateToProps)(App);
