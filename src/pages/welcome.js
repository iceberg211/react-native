import React, {Component} from 'react';
import {Text, View} from 'react-native';

class Welcome extends Component {
  state = {
    time: 3,
  };

  componentDidMount() {
    this.timer = setTimeout(() => {
      this.props.navigation.navigate('index');
    }, 1000);
  }

  componentWillMount() {
    clearTimeout(this.timer);
  }

  render() {
    return (
      <View>
        <Text> Welcome {this.state.time}</Text>
      </View>
    );
  }
}

export default Welcome;
