import React, {Component} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import {Carousel, Icon} from '@ant-design/react-native';
import TabNavigator from '../navigators/tabNavigators';

class IndexContainer extends Component {
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

export default IndexContainer;
