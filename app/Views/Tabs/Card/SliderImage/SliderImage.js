import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Pressable } from 'react-native';

const styles = StyleSheet.create({
  img: {
    flex:1, height:null,width:null, resizeMode: 'cover'
  },
  imgStyle: {borderRadius:20},
  container: {
    flex:1
  },
  openNow: {
    color:'white',
    left: 20,
    fontSize:20
  },
  topHalf: {
    flex: 30
  },
  bottomHalf: {
    flex:10
  },
  text:{
    fontSize: 35,
    color: 'white',
    fontWeight: '800'
  },
  secondaryText: {
    fontSize: 25,
    color:'white'
  },
  rating: {
    flex:1,
    flexDirection:'row'
  }

})
function SliderImage({business}) {
  console.log(business);
  return (
    business ?
    <ImageBackground style={styles.img} imageStyle = {styles.imgStyle} source={{uri: business.images[0]}}><View style={styles.container}></View>
    <View style={styles.topHalf} >
      {business.isOpenNow?
        <Text style ={styles.openNow}>open now</Text>: <Text></Text>
       }

    </View>
    <View style={styles.bottomHalf}>
    <Text style = {styles.text}>{business.name}</Text>
    <Text style={styles.secondaryText}>Price range: {business.price}</Text>
    <View style={styles.rating} >
      <Text style={styles.secondaryText}>{business.rating} stars </Text>
    <Text style={styles.secondaryText}>{business.reviewCount} reviews</Text>
    </View>
    <Text></Text>
    </View>

    </ImageBackground>: <Text>no image</Text>
  );
}

export default SliderImage;