import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  Animated,
  PanResponder,
  Slider,
} from "react-native";
import SliderImage from "./SliderImage/SliderImage.js";
import axios from "axios";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;
const Users = [
  {
    id: "1",
    uri: require("../../../../assets/Layout-Supplementary-Materials/background.jpg"),
  },
  {
    id: "2",
    uri: require("../../../../assets/Layout-Supplementary-Materials/chair.jpg"),
  },
  { id: "3", uri: require("../../../../assets/icons/icons8-user-48.png") },
  { id: "4", uri: require("../../../../assets/icons/icons8-explosion-64.png") },
];

//will possibly need to pass the currentIndex state up?
export default class Card extends React.Component {
  constructor(props) {
    super(props);

    this.PanResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderMove: (evt, gestureState) => {
        this.position.setValue({ x: gestureState.dx, y: gestureState.dy });
      },
      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.dx > 120) {
          Animated.spring(this.position, {
            toValue: {
              x: SCREEN_WIDTH + 100,
              y: gestureState.dy,
            },
            useNativeDriver:false
          }).start(() => {
            this.props.incrementCurrentIndex(() => {
              this.position.setValue({ x: 0, y: 0 });
            });
          });
          const id = this.props.businesses[this.props.currentIndex].businessId;
          this.props.toggleFavorites(id);
        } else if (gestureState.dx < -120) {
          Animated.spring(this.position, {
            toValue: {
              x: -SCREEN_WIDTH - 100,
              y: gestureState.dy,
            },
            useNativeDriver: false
          }).start(() => {

            this.props.incrementCurrentIndex(() => {
              this.position.setValue({ x: 0, y: 0 });
            });
          });
        } else {
          Animated.spring(this.position, {
            toValue: { x: 0, y: 0 },
            useNativeDriver: false,
            friction: 4,
          }).start();
        }
      },
    });

    this.position = new Animated.ValueXY();
    this.rotate = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: ["-10deg", "0deg", "10deg"],
      extrapolate: "clamp",
    });

    this.rotateAndTranslate = {
      transform: [
        {
          rotate: this.rotate,
        },
        ...this.position.getTranslateTransform(),
      ],
    };
    this.likeOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [0, 0, 1],
      extrapolate: "clamp",
    });
    this.dislikeOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0, 0],
      extrapolate: "clamp",
    });
    this.nextCardOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0, 1],
      extrapolate: "clamp",
    });
    this.nextCardScale = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0.8, 1],
      extrapolate: "clamp",
    });
  }

  renderUsers = () => {
    const { businesses, updateDescriptionView, currentIndex } = this.props;
    return businesses
      .map((item, i) => {
        if (i < currentIndex) {
          return null;
        } else if (i === currentIndex) {
          return (
            <Animated.View
              {...this.PanResponder.panHandlers}
              //ref='current'
              key={i}
              style={[
                this.rotateAndTranslate,
                {
                  height: SCREEN_HEIGHT - 120,
                  width: SCREEN_WIDTH,
                  padding: 10,
                  position: "absolute",
                },
              ]}
            >
              <Animated.View
                style={{
                  opacity: this.likeOpacity,
                  transform: [{ rotate: "-30deg" }],
                  position: "absolute",
                  top: 50,
                  left: 40,
                  zIndex: 1000,
                }}
              >
                <Text
                  style={{
                    borderWidth: 1,
                    borderColor: "green",
                    color: "green",
                    fontSize: 32,
                    fontWeight: "800",
                    padding: 10,
                  }}
                >
                  LIKE
                </Text>
              </Animated.View>
              <Animated.View
                style={{
                  opacity: this.dislikeOpacity,
                  transform: [{ rotate: "30deg" }],
                  position: "absolute",
                  top: 50,
                  right: 40,
                  zIndex: 1000,
                }}
              >
                <Text
                  style={{
                    borderWidth: 1,
                    borderColor: "red",
                    color: "red",
                    fontSize: 32,
                    fontWeight: "800",
                    padding: 10,
                  }}
                >
                  NOPE
                </Text>
              </Animated.View>
              <SliderImage
                business={item}
                updateDescriptionView={updateDescriptionView}
              />
            </Animated.View>
          );
        } else if (i=== currentIndex+1) {
          return (
            <Animated.View
              key={i}
              style={[
                {
                  opacity: this.nextCardOpacity,
                  transform: [{ scale: this.nextCardScale }],
                  height: SCREEN_HEIGHT - 120,
                  width: SCREEN_WIDTH,
                  padding: 10,
                  position: "absolute",
                },
              ]}
            >
              <SliderImage business={item} />
            </Animated.View>
          );
        }
      })
      .reverse();
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>{this.renderUsers()}</View>
      </View>
    );
  }
}
