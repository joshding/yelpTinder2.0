
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, Alert, View,  Image, ImageBackground, Text, Pressable } from 'react-native';
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
    alignItems: 'center'
  }
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
          flex: 10, flexDirection: "column", alignItems: "center"}} source={require('../assets/Layout-Supplementary-Materials/background.jpg')}>
            <Image
          style={styles.tinyLogo}
          source={require('../assets/icons/icons8-explosion-64.png')}
        />
        <Text style={{top:50}}>Discover Local Businesses near you</Text>
          </ImageBackground>
        {/* <View style={{
          backgroundColor: "#fc5c65",
          flex: 1
      }}/> */}
      <Pressable style={styles.startButton} onPress={handlePress}><Text>Let's get started!</Text></Pressable>
        <View style={{
          backgroundColor: "#4ECDC4",
          flex: 1}}/>
      </View>
  )
}