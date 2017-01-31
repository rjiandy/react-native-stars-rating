Object.defineProperty(exports,"__esModule",{value:true});exports.default=










Example;var _react=require('react');var _react2=_interopRequireDefault(_react);var _reactNative=require('react-native');var _Stars=require('./Stars');var _Stars2=_interopRequireDefault(_Stars);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function Example(){
return(
_react2.default.createElement(_reactNative.View,{style:{flex:1,alignItems:'center',justifyContent:'center'}},
_react2.default.createElement(_Stars2.default,{
isActive:true,
rateMax:5,
isHalfStarEnabled:false,
onStarPress:function onStarPress(rating){return console.log(rating);},
rate:3,
size:60}),

_react2.default.createElement(_Stars2.default,{
isActive:true,
rateMax:5,
isHalfStarEnabled:true,
onStarPress:function onStarPress(rating){return console.log(rating);},
rate:2.5,
size:60,
color:'#000000'})));




}