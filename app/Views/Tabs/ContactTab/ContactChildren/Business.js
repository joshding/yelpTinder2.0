import React from "react";
import { render } from "react-dom";
import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import ContactModal from './ContactModal'

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
class Business extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      currentBusiness: {}
    };
    this.setModalVisible= this.setModalVisible.bind(this);
  }
  setModalVisible = (visible, currentBusiness) => {
    this.setState({ modalVisible: visible , currentBusiness});
  }

  render() {
    const { favorites } = this.props;
    const {currentBusiness, modalVisible} = this.state;
    return favorites.map((favorite) => {
      return (
        <Pressable onPress={() => {
          this.setModalVisible(true, favorite);
        }}>
        <View style={styles.container}>
          <View style={styles.content}>
            <Image
              style={styles.image}
              source={{ uri: favorite.images[0] }}
            ></Image>
            <View style={styles.description}>
              <Text>{favorite.name}</Text>
              <Text>{favorite.phoneNumber}</Text>
              <View style={styles.reviews}>
                <Image source={SMSTARS[favorite.rating]}></Image>
                <Text> {favorite.reviewCount} reviews</Text>
              </View>
            </View>
          </View>
          <ContactModal setModalVisible={this.setModalVisible} favorite={currentBusiness} modalVisible={modalVisible}/>
        </View>
        </Pressable>
      );
    });
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 0,
    borderWidth: 1,
    width: 300,
    borderRadius: 8,
  },
  image: {
    height: "100%",
    width: "20%",
    borderRadius: 8
  },
  content: {
    flexDirection: "row",
  },
  description: {
    flexDirection: "column",
    padding: 5,
  },
  reviews: {
    flexDirection: "row",
  },

});

export default Business;
