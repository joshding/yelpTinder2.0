import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  Alert,
  Modal,
  TouchableHighlight,
  Dimensions,
} from "react-native";




const SMPATH = "../../../../assets/yelpStarsSm/small_";
const FORMAT = ".png";
const SMSTARS = {
  1: require(`${SMPATH}1${FORMAT}`),
  1.5: require(`${SMPATH}1_half${FORMAT}`),
  2: require(`${SMPATH}2${FORMAT}`),
  2.5: require(`${SMPATH}2_half${FORMAT}`),
  3: require(`${SMPATH}3${FORMAT}`),
  3.5: require(`${SMPATH}3_half${FORMAT}`),
  4: require(`${SMPATH}4${FORMAT}`),
  4.5: require(`${SMPATH}4_half${FORMAT}`),
  5: require(`${SMPATH}5${FORMAT}`),
};






function FavoritesReview({ review }) {
  //console.log("here is text: ", review.text);
  return (

    <View style={styles.container}>

      <View style={styles.header}>
        <Image
          style={styles.image}
          source={{ uri: review.user.image_url }}
        ></Image>
        <View>
          <View style={styles.user}>
            <Text>{review.user.name}</Text>
            <Text style={styles.elite}>Elite '21</Text>
            <Image source={SMSTARS[review.rating]}></Image>
          </View>
        </View>
      </View>
      <View style={styles.review}>
        <Text>{review.text}</Text>
      </View>

    </View>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    width: 300,
    borderRadius: 8,
  },
  image: {
    width: 50,
    height: 50,
  },
  header: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
  },
  elite: {
    fontWeight: "800",
    color: "#f15c00",
  },
  user: {
    paddingLeft: 10,
  },
  review: {
    flex: 1,
    marginTop: 0,
    paddingLeft: 10,
    paddingBottom: 10,
  },
});
export default FavoritesReview;
