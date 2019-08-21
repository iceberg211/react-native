import React, {Component} from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import Footer from '../component/footer';
import {Icon, SearchBar, TabBar} from '@ant-design/react-native';

export default class BsseLayout extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      value: '美食',
    };
    this.onChange = value => {
      this.setState({value});
    };
    this.clear = () => {
      this.setState({value: ''});
    };
  }

  render() {
    const {Children} = this.props;
    return (
      <View styles={styles.container}>
        <View style={styles.content}>
          <SearchBar defaultValue="初始值" placeholder="搜索" />
          <SearchBar
            value={this.state.value}
            placeholder="搜索"
            onSubmit={value => Alert.alert(value)}
            onCancel={this.clear}
            onChange={this.onChange}
            showCancelButton
          />
          {Children}
        </View>
        <View style={styles.footer}>
          <Footer />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  content: {
    flex: 1,
  },
  footer: {
    flexBasis: 50,
  },
});
