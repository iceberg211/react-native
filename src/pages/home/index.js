import React, {Component} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import {Carousel, Icon} from '@ant-design/react-native';
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
// import {getData} from './server';;
import Mine from '../mine';
import Settings from '../settingsScreen';
import Inbox from '../InboxContainer';

const TabNavigator = createAppContainer(
  createBottomTabNavigator(
    {
      Mine,
      Settings,
      Inbox,
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
  ),
);

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {chosenDate: new Date()};
  }
  onHorizontalSelectedIndexChange(index) {
    /* tslint:disable: no-console */
    console.log('horizontal change to', index);
  }

  onVerticalSelectedIndexChange(index) {
    /* tslint:disable: no-console */
    console.log('vertical change to', index);
  }

  render() {
    return <TabNavigator />;
  }
}

export default HomeScreen;
