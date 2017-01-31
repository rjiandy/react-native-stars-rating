Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _classAutobind=require('class-autobind');var _classAutobind2=_interopRequireDefault(_classAutobind);

var _MaterialIcons=require('react-native-vector-icons/MaterialIcons');var _MaterialIcons2=_interopRequireDefault(_MaterialIcons);

var _StarsStyle=require('./Stars-style');var _StarsStyle2=_interopRequireDefault(_StarsStyle);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var















Stars=function(_Component){_inherits(Stars,_Component);



function Stars(){_classCallCheck(this,Stars);var _this=_possibleConstructorReturn(this,(Stars.__proto__||Object.getPrototypeOf(Stars)).apply(this,
arguments));
(0,_classAutobind2.default)(_this);
_this.state={
activeIndex:_this.props.rate===0?1:_this.props.rate};return _this;

}_createClass(Stars,[{key:'_changeActiveIndex',value:function _changeActiveIndex(
i){var _props=
this.props,onStarPress=_props.onStarPress,isHalfStarEnabled=_props.isHalfStarEnabled;
onStarPress?onStarPress(isHalfStarEnabled?i/2:i):null;
this.setState({
activeIndex:isHalfStarEnabled?i/2:i});

}},{key:'render',value:function render()
{var _this2=this;var _props2=
this.props,size=_props2.size,color=_props2.color,rateMax=_props2.rateMax,isActive=_props2.isActive,isHalfStarEnabled=_props2.isHalfStarEnabled;
var customSize=null;
var starCustomStyle=null;
var stars=[];
var starShape='';
if(isHalfStarEnabled){
if(size!=null){
customSize={
width:size/2,
height:size};

starCustomStyle={
fontSize:size,
color:color?color:'#EEB211'};

}
var rateCount=this.state.activeIndex*2;
var currIndex=0;
var extraStyle={
left:size?size*-1:-20};var _loop=function _loop(

i){
if(i%2===0){
currIndex=i;
starShape='star';
stars.push(
_react2.default.createElement(_reactNative.View,{key:i,style:[_StarsStyle2.default.starsWrapper,size?{width:size,height:size}:{}]},
_react2.default.createElement(_MaterialIcons2.default,{
name:starShape,
style:[_StarsStyle2.default.starIcon,starCustomStyle]}),

_react2.default.createElement(_reactNative.TouchableWithoutFeedback,{
onPress:function onPress(){return isActive?_this2._changeActiveIndex(i-1):{};}},

_react2.default.createElement(_reactNative.View,{style:[_StarsStyle2.default.starLogicalPixel,customSize,extraStyle]})),

_react2.default.createElement(_reactNative.TouchableWithoutFeedback,{
onPress:function onPress(){return isActive?_this2._changeActiveIndex(i):{};}},

_react2.default.createElement(_reactNative.View,{style:[_StarsStyle2.default.starLogicalPixel,customSize,extraStyle]}))));


}else if(i===rateCount){
currIndex=i+1;
starShape='star-half';
stars.push(
_react2.default.createElement(_reactNative.View,{key:i,style:[_StarsStyle2.default.starsWrapper,size?{width:size,height:size}:{}]},
_react2.default.createElement(_MaterialIcons2.default,{
name:starShape,
style:[_StarsStyle2.default.starIcon,starCustomStyle]}),

_react2.default.createElement(_reactNative.TouchableWithoutFeedback,{
onPress:function onPress(){return isActive?_this2._changeActiveIndex(i):{};}},

_react2.default.createElement(_reactNative.View,{style:[_StarsStyle2.default.starLogicalPixel,customSize,extraStyle]})),

_react2.default.createElement(_reactNative.TouchableWithoutFeedback,{
onPress:function onPress(){return isActive?_this2._changeActiveIndex(i+1):{};}},

_react2.default.createElement(_reactNative.View,{style:[_StarsStyle2.default.starLogicalPixel,customSize,extraStyle]}))));


}};for(var i=1;i<=rateCount;i++){_loop(i);
}
var maxRateCount=rateMax*2;var _loop2=function _loop2(
i){
if(i%2===0){
stars.push(
_react2.default.createElement(_reactNative.View,{key:i,style:[_StarsStyle2.default.starsWrapper,size?{width:size,height:size}:{}]},
_react2.default.createElement(_MaterialIcons2.default,{
name:'star-border',
style:[_StarsStyle2.default.starIcon,starCustomStyle]}),

_react2.default.createElement(_reactNative.TouchableWithoutFeedback,{
onPress:function onPress(){return isActive?_this2._changeActiveIndex(i-1):{};}},

_react2.default.createElement(_reactNative.View,{style:[_StarsStyle2.default.starLogicalPixel,customSize,extraStyle]})),

_react2.default.createElement(_reactNative.TouchableWithoutFeedback,{
onPress:function onPress(){return isActive?_this2._changeActiveIndex(i):{};}},

_react2.default.createElement(_reactNative.View,{style:[_StarsStyle2.default.starLogicalPixel,customSize,extraStyle]}))));



}};for(var i=currIndex+1;i<=maxRateCount;i++){_loop2(i);
}
}else{
if(size!=null){
customSize={
width:size,
height:size};

starCustomStyle={
fontSize:size,
color:color?color:'#EEB211'};

}
var _extraStyle={
left:size?size*-1:-20};

var _currIndex=this.state.activeIndex;var _loop3=function _loop3(
i){
starShape='star';
stars.push(
_react2.default.createElement(_reactNative.View,{key:i,style:[_StarsStyle2.default.starsWrapper,customSize]},
_react2.default.createElement(_MaterialIcons2.default,{
name:starShape,
style:[_StarsStyle2.default.starIcon,starCustomStyle]}),

_react2.default.createElement(_reactNative.TouchableWithoutFeedback,{onPress:function onPress(){return isActive?_this2._changeActiveIndex(i):null;}},
_react2.default.createElement(_reactNative.View,{style:[_StarsStyle2.default.starFullLogicalPixel,customSize,_extraStyle]}))));};for(var i=1;i<=_currIndex;i++){_loop3(i);



}var _loop4=function _loop4(
i){
starShape='star-border';
stars.push(
_react2.default.createElement(_reactNative.View,{key:i,style:[_StarsStyle2.default.starsWrapper,customSize]},
_react2.default.createElement(_MaterialIcons2.default,{
name:starShape,
style:[_StarsStyle2.default.starIcon,starCustomStyle]}),

_react2.default.createElement(_reactNative.TouchableWithoutFeedback,{onPress:function onPress(){return isActive?_this2._changeActiveIndex(i):null;}},
_react2.default.createElement(_reactNative.View,{style:[_StarsStyle2.default.starFullLogicalPixel,customSize,_extraStyle]}))));};for(var i=_currIndex+1;i<=rateMax;i++){_loop4(i);



}
}
return(
_react2.default.createElement(_reactNative.View,{style:{flexDirection:'row'}},
stars));


}}]);return Stars;}(_react.Component);exports.default=Stars;