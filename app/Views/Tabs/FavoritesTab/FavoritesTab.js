//basically going to take props of the favorites and render them dynamically.
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
  Pressable,
  Animated,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import FavoritesModal from "./FavoritesModal.js";
import Swipeable from "react-native-gesture-handler/Swipeable";
import network from '../../network'

const SMPATH = "../../../assets/yelpStarsSm/small_";
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
class FavoritesTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: [],
      modalVisible: false,
      currentModalBusiness: {},
    };
    this.setModalVisible = this.setModalVisible.bind(this);
    this.deleteFavorite = this.deleteFavorite.bind(this);
  }
  getFavorites() {
    axios.get(network.connection + `/favorites`).then((response) => {
      console.log("here are favorites: ", response.data);
      const favorites = response.data;
      this.setState({ favorites });
      //console.log('here are favorites: ', favorites);
    });
  }

  setModalVisible(visible, business) {
    this.setState({ modalVisible: visible, currentModalBusiness: business });
  }
  deleteFavorite(business, index) {

    axios
      .put(network.connection +`/favorite/${business.businessId}`)
      .then(() => {
        this.setState({favorites:[]});
        this.getFavorites();
      });
  }
  componentDidMount() {
    this.getFavorites();
  }

  render() {
    //const {businesses} = this.props;
    const { modalVisible, currentModalBusiness } = this.state;
    const businesses = this.state.favorites;
    //const swipeableRef = useRef(null);
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titleText}>Favorites</Text>
        </View>
        <View style={styles.favoriteList}>
          <ScrollView style={styles.favoritesList}>
            {businesses.length ? (
              businesses.map((business, index) => {
                return (
                  <Swipeable
                  //ref={swipeableRef}
                    renderRightActions={(progress, dragX) => (
                      <RightActions
                        progress={progress}
                        dragX={dragX}
                        deleteFavorite={this.deleteFavorite}
                        business={business}
                        index={index}
                      />
                    )}
                  >
                    <Pressable
                      onPress={() => {
                        this.setModalVisible(true, business);
                      }}
                    >
                      <View style={styles.favoriteContainer}>
                        <Image
                          style={styles.image}
                          source={{ uri: business.images[0] }}
                        ></Image>
                        <View style={styles.description}>
                          <Text>{business.name}</Text>
                          <Text>{business.address}</Text>
                          <View style={styles.reviewCount}>
                            <Image source={SMSTARS[business.rating]}></Image>
                            <Text> {business.reviewCount} reviews</Text>
                          </View>
                        </View>
                        <FavoritesModal
                          business={currentModalBusiness}
                          modalVisible={modalVisible}
                          setModalVisible={this.setModalVisible}
                        />
                      </View>
                    </Pressable>
                  </Swipeable>
                );
              })
            ) : (
              <Text></Text>
            )}
          </ScrollView>
        </View>

        <View></View>
      </View>
    );
  }
}

function RightActions({ progress, dragX, deleteFavorite, business, index }) {
  const scale = dragX.interpolate({
    inputRange: [-100, 0],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });
  return (
    <TouchableOpacity onPress={() => deleteFavorite(business, index)}>
      <View style={styles.rightAction}>
        <Animated.Text style={[styles.actionText, { transform: [{ scale }] }]}>
          Delete
        </Animated.Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    flex: 1,
    // alignItems: 'center',
    position: "absolute",
    // borderWidth: 1,
    // marginBottom: -100
  },
  titleText: {
    fontSize: 40,
  },
  favoriteList: {
    flex: 10,
    padding: 20,
    maxHeight: 300,
    marginTop: 300,
  },
  image: {
    width: "20%",
    height: "100%",
    borderRadius: 8,
  },
  favoriteContainer: {
    flex: 1,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "black",
    alignItems: "center",
    borderRadius: 10,
    maxHeight: 70,
    minHeight: 70,
  },
  favoritesList: {
    flex: 1,
    //borderWidth:1,
    //borderColor: 'black',
    marginTop: -275,
  },
  reviewCount: {
    flex: 1,
    flexDirection: "row",
  },
  description: {
    padding: 10,
  },
  rightAction: {
    backgroundColor: "#dd2c00",
    justifyContent: "center",
    borderRadius: 8,
    minHeight: 70,
    //flex: 1
  },
  actionText: {
    color: "#fff",
    fontWeight: "600",
    padding: 20,
  },
});

export default FavoritesTab;
