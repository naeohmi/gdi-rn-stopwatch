/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Container, Content, Button } from 'native-base';
import FormatTime from 'minutes-seconds-milliseconds';

export default class Stopwatch extends Component {
  constructor(props) {
    super(props)

    this.state = {
      timeElapsed: 0,
      running: false,
      startTime: null
    }

    this.handleStartPress = this.handleStartPress.bind(this);
  }

  render() {
    return (
      <Container>
        <Content contentContainerStyle={{flex: 1}}>
          <View style={styles.container}>
            <Text style={styles.content}>
              {FormatTime(this.state.timeElapsed)}
            </Text>
            <Button style={{alignSelf: 'center'}} onPress={this.handleStartPress}>
              <Text style={styles.button}>{this.state.running ? 'Stop' : 'Start'}</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }

  handleStartPress() {
    if (this.state.running) {
      clearInterval(this.interval)
      this.setState({running: false})
      return
    }

    this.setState({
      startTime: new Date(),
    })

    this.interval = setInterval(() => {
      this.setState({
        timeElapsed: new Date() - this.state.startTime,
        running: true,
      })
    }, 30)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  content: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    color: '#FFFFFF'
  }
});

AppRegistry.registerComponent('Stopwatch', () => Stopwatch);
