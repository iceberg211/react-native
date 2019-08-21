import React from 'react';
import PropTypes from 'prop-types';
import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';
import HomeScreen from './pages/home';
import SettingsScreen from './pages/settingsScreen';
import Mine from './pages/mine';
import {Icon} from '@ant-design/react-native';

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Settings: SettingsScreen,
    Mine: Mine,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        // let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = 'zhihu';
        } else if (routeName === 'Settings') {
          iconName = 'windows';
        } else {
          iconName = 'ant-design';
        }

        // You can return any component that you like here!
        return <Icon name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  },
);

export default createAppContainer(TabNavigator);
