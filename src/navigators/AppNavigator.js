import React from 'react';
import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator,
} from 'react-navigation';

import Welcome from '../pages/welcome';
import HomePage from '../pages/home';
import ExploreContainer from '../pages/ExploreContainer';

const InitNavigator = createStackNavigator({
  welcomePage: Welcome,
});

const MainNavigator = createStackNavigator({
  homePage: HomePage,
  detailPage: ExploreContainer,
});

// 链接初始化和项目主路由文件
export default createAppContainer(
  createSwitchNavigator(
    {
      init: InitNavigator,
      main: MainNavigator,
    },
    {
      initialRouteName: 'init',
    },
  ),
);

// export const routerReducer = createNavigationReducer(RootNavigator);

// export const routerMiddleware = createReactNavigationReduxMiddleware(
//   'root',
//   state => state.router,
// );

// const AppWithNavigationState = createReduxContainer(RootNavigator, 'root');

// const mapStateToProps = state => ({
//   router: state.router,
// });

// export default connect(mapStateToProps)(AppWithNavigationState);
