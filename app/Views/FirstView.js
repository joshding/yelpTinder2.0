
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, Alert, View,  Image, ImageBackground, Text, Pressable, TouchableOpacity } from 'react-native';
import {useDimensions, useDeviceOrientation} from '@react-native-community/hooks';
import MyAppText from '../MyAppText';


const styles = StyleSheet.create({
  tinyLogo: {
    width: 75,
    height: 75,
    top: 50
  },
  startButton: {
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: 'gold',
     //position:'absolute',

    // alignSelf: 'flex-end'

  },
  // startView: {
  //   //flex: 1,
  //   justifyContent:'center',
  //   alignItems: 'center',
  //   backgroundColor: 'rgba(52, 52, 52, .5)'
  // }
});

export default FirstView = ({handlePress}) => {
  return (
  <View
      style ={{
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: "column",
        // justifyContent: "center", //main
        // alignItems: "center", //secondary
        // alignContent:"center",
      }}
      >

        <ImageBackground style={{
          flex: 10, flexDirection: "column", alignItems: "center"}} source={require('../assets/pictures/0b04db23e40511b47092f16ebc376653.jpg')}>
            <Image
          style={styles.tinyLogo}
          source={require('../assets/icons/icons8-crown-80.png')}
        />
        <Text style={{top:50, color: 'black', fontSize: 15, fontWeight: '800'}}>Discover Local Businesses near you</Text>
          </ImageBackground>
        {/* <View style={{
          backgroundColor: "#fc5c65",
          flex: 1
      }}/> */}

      <TouchableOpacity style={styles.startButton} onPress={handlePress}><Button onPress={handlePress} title="Let's Get Started"></Button></TouchableOpacity>
      </View>
  )
}