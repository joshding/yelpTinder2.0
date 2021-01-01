import React from 'react';
import {Image, View, Text, StyleSheet, Pressable, SafeAreaView, Dimensions} from 'react-native';
const SCREEN_WIDTH = Dimensions.get('window').width;
const styles = StyleSheet.create({
img: {
  width:SCREEN_WIDTH,
  height:SCREEN_WIDTH
},
backIcon: {
  width:50,
  height:50,
  position:'absolute',
  marginTop: -25,
  right:10
}
})

function DescriptionView({business,updateDescriptionView}) {
  //console.log(business.images[0])
  return (
    <SafeAreaView>
      <Image style={styles.img} source={{uri: business.images[0]}}></Image>
    <View>
      <Pressable onPress={() => updateDescriptionView(false)}>
      <Image style={styles.backIcon} source={require('../assets/default/adaptive-icon.png')}></Image>
      </Pressable>
    <Text>{business.name}</Text>
    </View>
    {/* <Pressable onPress={}>

    </Pressable> */}
    </SafeAreaView>
  );
}

export default DescriptionView;