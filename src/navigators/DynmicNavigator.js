import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Icon} from '@ant-design/react-native';
import SavedContainer from '../pages/SavedContainer';
import ProfileContainer from '../pages/ProfileContainer';
import TripsContainer from '../pages/TripsContainer';

const TABS = {
  //在这里配置页面的路由
  savePage: {
    screen: SavedContainer,
    navigationOptions: {
      tabBarLabel: '最热',
      tabBarIcon: ({tintColor, focused}) => (
        <Icon name={'whatshot'} size={26} style={{color: tintColor}} />
      ),
    },
  },
  Page: {
    Profilescreen: ProfileContainer,
    navigationOptions: {
      tabBarLabel: '趋势',
      tabBarIcon: ({tintColor, focused}) => (
        <Icon name={'md-trending-up'} size={26} style={{color: tintColor}} />
      ),
    },
  },
  FavoritePage: {
    screen: TripsContainer,
    navigationOptions: {
      tabBarLabel: '收藏',
      tabBarIcon: ({tintColor, focused}) => (
        <Icon name={'favorite'} size={26} style={{color: tintColor}} />
      ),
    },
  },
};

class DynmicNavigator extends Component {
  constructor(props) {
    super(props);
    console.disableYellowBox = true;
  }

  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}

export default DynmicNavigator;
