# react-native-stars-rating
This is a simple rating component for react-native.

## Dependencies
1. react-native-vector-icons
2. class-autobind

## Installation
`$ npm install react-native-stars-rating --save`

## Link Material Icons Usage
`$ react-native link`

## Usage Example
```
import Stars from 'react-native-stars-rating';

<Stars
  isActive={true}
  rateMax={5}
  isHalfStarEnabled={false}
  onStarPress={(rating) => console.log(rating)}
  rate={3}
  size={60}
/>
```
## Props
```
type Props = {
  size?: number;
  color?: number;
  rate: number;
  rateMax: number;
  isActive: boolean;
  onStarPress?: (rating: number) => void;
  isHalfStarEnabled?: boolean;
  rounding: 'up' : 'down';
};
```
## Props Explanation
Prop    | Description | Default | Required
---     | ----------- | ------- | --------
size   | The Size of the stars | 20 | _no_
color  | Determine the color of the stars rating | #EEB211 | _no_
rate    | Shows current rating for the star component to display | 0 _(if not active)_ or 1 _(if active)_ | __yes__
rateMax | Determine the maximum stars rating to display | 5 | __yes__
isActive| Enable the stars rating to be __clickable__ | `false` | __yes__
onStarPress | A function that returns the current active rating number using callback | `null` | _no_
isHalfStarEnabled | Enable the star rating component to support half rating | `false` | _no_
rounding| Enabled rounding logic on rating (3.25 -> 3.5) if using up or vice versa | `down` | __yes__

## IOS Showcase
![rn-stars-ios](https://cloud.githubusercontent.com/assets/20079730/22450974/10a889a0-e79d-11e6-96f8-2632a9e8cb40.gif)

## Android Showcase
![rn-stars-android](https://cloud.githubusercontent.com/assets/20079730/22450985/22a8f0ea-e79d-11e6-9007-7fab8390eb14.gif)
