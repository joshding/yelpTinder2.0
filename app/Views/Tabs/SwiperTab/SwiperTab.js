import React from 'react';
import { StyleSheet, Button, Alert, View, Dimensions, ImageBackground , Image, SafeAreaView, Text, Pressable} from 'react-native';
import {useDimensions, useDeviceOrientation} from '@react-native-community/hooks';
import Card from './Card/Card.js';

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
    borderWidth: 2,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
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

export default SwiperTab = ({businesses, updateDescriptionView, currentIndex, toggleFavorites, incrementCurrentIndex}) => {
  return (
    <View>
      <Card
        businesses={businesses}
        updateDescriptionView={updateDescriptionView}
        currentIndex={currentIndex}
        toggleFavorites={toggleFavorites}
        incrementCurrentIndex={incrementCurrentIndex}
      />
      <View
        style={{
          flex: 1.5,
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          marginTop: 580,
        }}
      >
        <Image
          style={{ width: 50, height: 50 }}
          source={require("../../../assets/icons/icons8-xbox-x-96.png")}
        />
        <Image
          style={{ width: 50, height: 50 }}
          source={require("../../../assets/icons/icons8-checked-96.png")}
        />
      </View>
    </View>
  );
}
