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
````
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
};
```

## IOS Showcase
![rn-stars-ios](https://cloud.githubusercontent.com/assets/20079730/22450974/10a889a0-e79d-11e6-96f8-2632a9e8cb40.gif)

## Android Showcase
![rn-stars-android](https://cloud.githubusercontent.com/assets/20079730/22450985/22a8f0ea-e79d-11e6-9007-7fab8390eb14.gif)
