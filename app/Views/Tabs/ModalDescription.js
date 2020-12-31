import React from "react";
import {
  StyleSheet,
  Button,
  Alert,
  View,
  Dimensions,
  ImageBackground,
  Image,
  SafeAreaView,
  Text,
  Pressable,
} from "react-native";
const XLPATH= '../../assets/yelpStarsXLg/extra_large_';
const FORMAT='.png';
const XLSTARS = {
  1:require(`${XLPATH}1${FORMAT}`),
  '1.5': require(`${XLPATH}1_half${FORMAT}`),
  2: require(`${XLPATH}2${FORMAT}`),
  '2.5': require(`${XLPATH}2_half${FORMAT}`),
  3: require(`${XLPATH}3${FORMAT}`),
  '3.5': require(`${XLPATH}3_half${FORMAT}`),
  4: require(`${XLPATH}4${FORMAT}`),
  '4.5': require(`${XLPATH}4_half${FORMAT}`),
  5: require(`${XLPATH}5${FORMAT}`)
}
function ModalDescription({business}) {
  return (
    <View>
      <View style={styles.modalTitleView}>
        <Text style={styles.modalTitleText}>{business.name}</Text>
        <Text style={styles.miles}>{business.distance}mi</Text>
      </View>
      <View style={styles.rating}>
        <Image source={XLSTARS[business.rating]}></Image>
        <Text style={styles.modalReviewCount}>
          {" "}
          {business.reviewCount} reviews
        </Text>
      </View>
      <Text style={styles.modalPriceRange}>Price Range: {business.price}</Text>
      {business && business.categories ? (
        <Text style={styles.modalPriceRange}>
          Categories:{" "}
          {business.categories.map((category) => category.title).join(", ")}
        </Text>
      ) : (
        <Text></Text>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  modalTitleText: {
    fontSize: 40,
    fontWeight: '800',
    paddingBottom: 10
  },
  modalReviewCount: {
    fontSize: 25,
    marginTop: 3
  },
  modalPriceRange: {
    fontSize: 25
  },
  modalTitleView: {
    flex:0,
    flexDirection: 'row'

  },
  miles: {
    position:'absolute',
    fontSize:15,
    right:0
  },
  modalDescriptionView: {
    padding:10
  },
  rating: {
    flex:0,
    flexDirection:'row'
  }
})

export default ModalDescription;
