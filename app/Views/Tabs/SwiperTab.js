import React from 'react';
import { StyleSheet, Button, Alert, View, Dimensions, ImageBackground , Image, SafeAreaView, Text, Pressable} from 'react-native';
import {useDimensions, useDeviceOrientation} from '@react-native-community/hooks';
import Swiper from 'react-native-dynamic-deck-swiper';

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

export default SwiperTab = ({businesses}) => {
  var i = 0;
  console.log(businesses);
  return (
   <View>
    <Swiper
        getNextCardData={({ first, left, right, previousCards }) => {
          const index =0
          //previousCards.length
          console.log(index)
          return index;
          if(left || right|| first) {
          return <ImageBackground  resizeMode="stretch" style={styles.picture} imageStyle={styles.card} source={{uri:businesses[index].images[0]}}></ImageBackground>
          }
          return null;
        }}
      >
        {(card) =>
          card === null ? (
            <View style={styles.card}>
              <Text style={styles.text}>This is the end of the deck, pal.</Text>
            </View>
          ) : (
            <ImageBackground  resizeMode="stretch" style={styles.picture} imageStyle={styles.card} source={{uri:businesses[card].images[0]}}></ImageBackground>

          )
        }
      </Swiper>
         <View style={{
          flex: 1.5,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          marginTop: 560}}>
            <Image style={{width:50, height: 50}} source={require('../../assets/icons/icons8-xbox-x-96.png')}/>
            <Image style={{width:50, height: 50}} source={require('../../assets/icons/icons8-checked-96.png')} />
          </View>
      </View>
  )
}
