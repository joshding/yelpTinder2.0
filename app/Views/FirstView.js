import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Button,
  Alert,
  View,
  Image,
  ImageBackground,
  Text,
  Pressable,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import MyAppText from "../MyAppText";

const WIDTH = Dimensions.get("window").width;

export default FirstView = ({ handlePress }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require("../assets/pictures/0b04db23e40511b47092f16ebc376653.jpg")}
      >
        <Image
          style={styles.tinyLogo}
          source={require("../assets/icons/icons8-crown-80.png")}
        />
        <Text style={styles.text}>Discover Local Businesses near you</Text>
      </ImageBackground>

      <TouchableOpacity style={styles.startButton} onPress={handlePress}>
        <Button onPress={handlePress} title="Let's Get Started"></Button>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  tinyLogo: {
    width: 75,
    height: 75,
    top: 50,
  },
  startButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "gold",
    position: "absolute",
    top: 575,
    width: 275,
    height: 55,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "black",
  },
  container: {
    backgroundColor: "#fff",
    flex: 1,
    flexDirection: "column",
    alignItems: "center", //secondary
  },
  backgroundImage: {
    flex: 10,
    flexDirection: "column",
    alignItems: "center",
    width: WIDTH,
  },
  text: {
    top: 50,
    color: "black",
    fontSize: 15,
    fontWeight: "800",
  },
});
