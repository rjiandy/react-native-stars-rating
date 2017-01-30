// @flow

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import Example from './src/Example';

export default class ReactNativeStarsRating extends Component {
  render() {
    return (
      <Example />
    );
  }
}

AppRegistry.registerComponent('ReactNativeStarsRating', () => ReactNativeStarsRating);
