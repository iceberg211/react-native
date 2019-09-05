import React from 'react';
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from '../pages/home';
import SettingsScreen from '../pages/settingsScreen';
import Inbox from '../pages/InboxContainer';
import Mine from '../pages/mine';
import {Icon} from '@ant-design/react-native';

const CustomTabBarIcon = (name, size) => {
  const icon = ({tintColor}) => (
    <Icon name={name} size={size} color={tintColor} />
  );
  return icon;
};

const TabNavigator = createAppContainer(
  createBottomTabNavigator(
    {
      home: {
        screen: HomeScreen,
        navigationOptions: {
          tabBarLabel: '主页',
          tabBarIcon: CustomTabBarIcon('home', 22),
        },
      },
      settings: {
        screen: SettingsScreen,
        navigationOptions: {
          tabBarLabel: '知乎',
          tabBarIcon: CustomTabBarIcon('zhihu', 22),
        },
      },
      inbox: {
        screen: Inbox,
        navigationOptions: {
          tabBarLabel: 'windows',
          tabBarIcon: CustomTabBarIcon('windows', 22),
        },
      },
      mine: {
        screen: Mine,
        navigationOptions: {
          tabBarLabel: '我的',
          tabBarIcon: CustomTabBarIcon('ant-design', 22),
        },
      },
    },
    {
      tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      },
    },
  ),
);

export default TabNavigator;
