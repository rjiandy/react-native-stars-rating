// @flow

import React from 'react';

import {
  View,
  Text,
} from 'react-native';

import Stars from './Stars';

export default function Example() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Stars
        isActive={true}
        rateMax={5}
        isHalfStarEnabled={false}
        onStarPress={(rating) => console.log(rating)}
        rate={3}
        size={60}
      />
      <Stars
        isActive={true}
        rateMax={5}
        isHalfStarEnabled={true}
        onStarPress={(rating) => console.log(rating)}
        rate={2.5}
        size={60}
        color={'#000000'}
      />

    </View>
  );
}
