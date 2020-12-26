
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, Alert, View, Dimensions, ImageBackground , Image, SafeAreaView, Text, Pressable} from 'react-native';
import {useDimensions, useDeviceOrientation} from '@react-native-community/hooks';
import Swiper from 'react-native-dynamic-deck-swiper';
import MyAppText from '../MyAppText.js'

const styles = StyleSheet.create({
  tinyLogo: {
    width: 125,
    height: 125,
    top: 75
  },
  container: {
    flex: 12,
    backgroundColor: '#F5FCFF'
  },
  card: {
    flex: 1,
     //borderRadius: 8,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    //backgroundColor: 'turquoise',
    marginTop: 0,
    marginBottom: 50,
    marginLeft: 0,
    marginRight: 0,
    borderRadius: 30,
    padding: 10,
    height: 535
  },
  text: {
    textAlign: 'center',
    fontSize: 50,
    backgroundColor: 'transparent'
  },
  picture: {
    width:'100%',
    height: '100%',

  }
});


export default SwiperView = ({changeView}) => {
  console.log('in swiper view')
  return (
  <View
      style ={{
        backgroundColor: "#fff",
        flex:1
      }}
      >

        <SafeAreaView  style={{
          flex: 1, flexDirection: "row", flexWrap: "wrap", justifyContent: "space-evenly"}}>
            <View   style={{backgroundColor:'pink',borderRadius:100}}>
            <Image  style={{width:30, height: 30}} source={require('../assets/icons/icons8-explosion-64.png')}/>
            </View>
            <Pressable onPress={() => changeView(2)}>
            <Image defaultSource={require('../assets/default/icon.png')} style={{width:30, height: 30}} source={require('../assets/icons/icons8-star-48.png')}/>
            </Pressable>
            <View>
            <Image style={{width:30, height: 30}} source={require('../assets/icons/icons8-chat-bubble-100.png')}/>
            </View>
            <View>
            <Image style={{width:30, height: 30}} source={require('../assets/icons/icons8-user-48.png')}/>
            </View>
          </SafeAreaView>
        <View style={styles.container}>
      <Swiper
        getNextCardData={({ first, left, right, previousCards }) => {
          if (previousCards.length >= 10) {
            // End of deck
            return null;
          }
          if (first) {
            return 'This is the first card. This is card #1.';
          } else if (left) {
            return `You swiped to the left. This is card #${previousCards.length +
              1}.`;
          } else if (right) {
            return `You swiped to the right. This is card #${previousCards.length +
              1}.`;
          }
        }}
      >
        {(card) =>
          card === null ? (
            <View style={styles.card}>
              <Text style={styles.text}>This is the end of the deck, pal.</Text>
            </View>
          ) : (
            // <View style={styles.card}>
            //   <Text style={styles.text}>{card}</Text>
            // </View>

            <ImageBackground  resizeMode="stretch" style={styles.picture} imageStyle={styles.card} source={require('../assets/Layout-Supplementary-Materials/chair.jpg')}></ImageBackground>

          )
        }
      </Swiper>
    </View>
        <View style={{
         // backgroundColor: "black",
          flex: 1.5,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center'}}>
            <Image style={{width:50, height: 50}} source={require('../assets/icons/icons8-xbox-x-96.png')}/>
            <Image style={{width:50, height: 50}} source={require('../assets/icons/icons8-checked-96.png')} />
            </View>
      </View>
  )
}
