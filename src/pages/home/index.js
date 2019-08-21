import React, {Component} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import {Carousel} from '@ant-design/react-native';
// import {getData} from './server';;

export class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {chosenDate: new Date()};

    this.setDate = this.setDate.bind(this);
  }

  componentDidMount() {}

  // async fetchData() {
  //   const data = await getData();
  // }

  onHorizontalSelectedIndexChange(index) {
    /* tslint:disable: no-console */
    console.log('horizontal change to', index);
  }

  onVerticalSelectedIndexChange(index) {
    /* tslint:disable: no-console */
    console.log('vertical change to', index);
  }

  render() {
    return (
      <View>
        <Carousel
          style={styles.wrapper}
          selectedIndex={2}
          autoplay
          infinite
          afterChange={this.onHorizontalSelectedIndexChange}>
          <View style={[styles.containerHorizontal, {backgroundColor: 'red'}]}>
            <Text>Carousel 1</Text>
          </View>
          <View style={[styles.containerHorizontal, {backgroundColor: 'blue'}]}>
            <Text>Carousel 2</Text>
          </View>
          <View
            style={[styles.containerHorizontal, {backgroundColor: 'yellow'}]}>
            <Text>Carousel 3</Text>
          </View>
          <View style={[styles.containerHorizontal, {backgroundColor: 'aqua'}]}>
            <Text>Carousel 4</Text>
          </View>
          <View
            style={[styles.containerHorizontal, {backgroundColor: 'fuchsia'}]}>
            <Text>Carousel 5</Text>
          </View>
        </Carousel>
        <FlatList
          data={[{key: 'a'}, {key: 'b'}]}
          renderItem={({item}) => <Text>{item.key}</Text>}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
  },
  containerHorizontal: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
  },
  containerVertical: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
  },
  text: {
    color: '#fff',
    fontSize: 36,
  },
});

export default HomeScreen;
