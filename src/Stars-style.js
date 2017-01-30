// @flow

import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  starsWrapper: {
    width: 20,
    height: 20,
    flexDirection: 'row',
    position: 'relative',
  },
  starLogicalPixel: {
    left: -20,
    width: 10,
    height: 20,
    position: 'relative',
    backgroundColor: 'transparent',
  },
  starIcon: {
    fontSize: 20,
    position: 'relative',
    color: '#EEB211',
  },
  starFullLogicalPixel: {
    left: -20,
    width: 20,
    height: 20,
    position: 'relative',
    backgroundColor: 'transparent',
  },
});
