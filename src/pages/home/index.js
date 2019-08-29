import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  createMaterialTopTabNavigator,
  createAppContainer,
} from 'react-navigation';
import PopularTabPage from './popularTab';

export default class PopulaPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: ['Java', 'Android', 'Ios', 'React', 'React-native', 'Php'],
    };
  }

  createNavigator = () => {
    const tabs = {};
    // const {keys, theme} = this.props;
    this.state.tabs.forEach((item, index) => {
      tabs[item] = {
        screen: props => <PopularTabPage {...props} tabLabel={item} />,
        tabBarLabel: item,
      };
    });
    return tabs;
  };

  render() {
    const options = this.createNavigator();

    const TabNavigator = createAppContainer(
      createMaterialTopTabNavigator(options, {
        tabBarOptions: {
          // tabStyle: styles.tabStyle,
          upperCaseLabel: false, //是否使标签大写，默认为true
          scrollEnabled: true, //是否支持 选项卡滚动，默认false
          // style: {
          // backgroundColor: 'white', //TabBar 的背景颜色
          // height: 30, //fix 开启scrollEnabled后再Android上初次加载时闪烁问题
          // },
          indicatorStyle: styles.indicatorStyle, //标签指示器的样式
          // labelStyle: styles.labelStyle, //文字的样式
        },
        lazy: true,
      }),
    );

    return (
      <View style={styles.container}>
        <TabNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabStyle: {
    // minWidth: 50 //fix minWidth会导致tabStyle初次加载时闪烁
    padding: 0,
  },
  indicatorStyle: {
    height: 2,
    backgroundColor: 'white',
  },
  labelStyle: {
    fontSize: 13,
    margin: 0,
  },
  indicatorContainer: {
    alignItems: 'center',
  },
  indicator: {
    color: 'red',
    margin: 10,
  },
});
