
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, Alert, View,  Image, ImageBackground, Text } from 'react-native';
import {useDimensions, useDeviceOrientation} from '@react-native-community/hooks';
import MyAppText from '../MyAppText';


const styles = StyleSheet.create({
  tinyLogo: {
    width: 75,
    height: 75,
    top: 50
  }
});

export default FirstView = (props) => {
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
          source={require('../assets/Layout-Supplementary-Materials/logo-red.png')}
        />
        <Text style={{top:50}}>Sell What You Don't Need</Text>
          </ImageBackground>
        <View style={{
          backgroundColor: "#fc5c65",
          flex: 1
      }}/>
        <View style={{
          backgroundColor: "#4ECDC4",
          flex: 1}}/>
      </View>
  )
}