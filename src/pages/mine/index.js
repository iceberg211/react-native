import React, {Component} from 'react';
import {Image, ScrollView, View, Text} from 'react-native';
import {List} from '@ant-design/react-native';
const Item = List.Item;
const Brief = Item.Brief;
export class Mime extends Component {
  render() {
    return (
      <ScrollView
        style={{flex: 1, backgroundColor: '#f5f5f9'}}
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <List />
      </ScrollView>
    );
  }
}

export default Mime;
