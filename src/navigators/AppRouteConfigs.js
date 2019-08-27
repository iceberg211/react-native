import React from 'react';
import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation';

import Welcome from '../pages/welcome';
import Index from '../pages/index';
import ExploreContainer from '../pages/ExploreContainer';

const InitNavigator = createStackNavigator({
  // welcomePage: Welcome,
  welcomePage: {
    screen: Welcome,
    navigationOptions: {
      tabBarLabel: '我的',
    },
  },
});

const MainNavigator = createStackNavigator({
  index: {
    screen: Index,
    navigationOptions: {
      header: null,
    },
  },
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
