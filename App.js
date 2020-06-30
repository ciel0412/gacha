import React,{useRef} from 'react';
import { Animated, Easing,StyleSheet,View,Text,ToastAndroid, Alert,Button } from 'react-native';
import LottieView from 'lottie-react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
//import {NavigationContainer} from'@react-navigation/native';
//import {createStackNavigator } from '@react-navigation/stack';
const App=()=>{
const animation=useRef(null);
const onPress=()=>{
  animation.current.play();
};
  return(
    <View style={styles.container}>
  <LottieView 
    ref={animation}
    source={require('./json/icon.json')}
    loop={false}
  />


  
  <TouchableOpacity onPress={()=>{onPress();Alert.alert('今天就來喝杯','珍珠奶茶',[
    {text:'不要',onpress:()=>ToastAndroid.show('重新選擇',ToastAndroid.SHORT)},
    {text:'好啊',onpress:()=>ToastAndroid.show('加入',ToastAndroid.SHORT)}
  ]);}}
  >
    <Text style={styles.button}>{"PLAY"}</Text>
  </TouchableOpacity>
  </View>
);
  }
  const styles=StyleSheet.create({
    container:{
      width:500,
      height:300,
    },
    button:{
      width:100,
      height:50,
      backgroundColor:"#F9D9A6",
      marginLeft:50,
      marginTop:100,
      
    }
  
  })
  export default App;


