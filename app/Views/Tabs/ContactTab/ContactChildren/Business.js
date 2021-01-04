import React from "react";
import { render } from "react-dom";
import { Text, View, StyleSheet, Image, Pressable,TouchableOpacity,Animated, Alert} from "react-native";
import ContactModal from './ContactModal';
import Swipeable from "react-native-gesture-handler/Swipeable";

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
    this.onSwipeLeft= this.onSwipeLeft.bind(this);
  }
  setModalVisible = (visible, currentBusiness) => {
    this.setState({ modalVisible: visible , currentBusiness});
  }
  onSwipeLeft=(name, phoneNumber, index)=> {
     Alert.alert(name, `Calling ${phoneNumber}...`)
    const ref = 'swipeableRef' + index;
    this.refs[ref].close();
  }
  render() {
    const { favorites, deleteFavorite } = this.props;
    const {currentBusiness, modalVisible} = this.state;
    return favorites.map((favorite, index) => {
      return (
        <Swipeable
                  ref={`swipeableRef${index}`}
                    renderRightActions={(progress, dragX) => (
                      <RightActions
                        progress={progress}
                        dragX={dragX}
                        deleteFavorite={deleteFavorite}
                        business={favorite}
                        index={index}

                      />
                    )}
                    renderLeftActions ={LeftActions}
                    onSwipeableLeftOpen ={() => this.onSwipeLeft(favorite.name, favorite.phoneNumber, index)}
                    key={index}
                  >
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
        </Swipeable>
      );
    });
  }
}
function LeftActions(progress, dragX) {
  const scale = dragX.interpolate({
    inputRange:[0,100],
    outputRange:[0,1],
    extrapolate:'clamp'
  })
 return (
   <View style={styles.leftAction}>
     <Animated.Text style={[styles.actionText,{transform:[{scale}]}]}>Call Business</Animated.Text>
   </View>
 )
}
function RightActions({ progress, dragX, deleteFavorite, business, index }) {
  const scale = dragX.interpolate({
    inputRange: [-100, 0],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });
  return (
    <TouchableOpacity onPress={() => {  deleteFavorite(business, index)}}>
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
    flex: 0,
    //borderTopWidth: 1,
    width: 350,
    borderBottomWidth: 1,
    borderColor:'#D8D8D8',
    padding:5
    //borderRadius: 8,
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
  rightAction: {
    backgroundColor: "#dd2c00",
    justifyContent: "center",
    borderRadius: 8,
    minHeight: 70,
    //flex: 1
  },
  leftAction: {
    backgroundColor: '#388e3c',
    justifyContent: 'center' ,
    flex:1
  },
  actionText: {
    color: "#fff",
    fontWeight: "600",
    padding: 20,
  },

});

export default Business;
