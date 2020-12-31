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
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import Swiper from "react-native-dynamic-deck-swiper";
const days = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
};
const HoursOfOperation = ({ hours }) => {
  
  function convertToNormalTime(time) {
    let hour = time.slice(0, 2);
    let minutes = time.slice(2);
    let ampm;
    if (+hour >= 12) {
      ampm = "pm";
      if (+hour !== 12) {
        hour = (+hour - 12).toString();
      }
    } else {
      ampm = "am";
    }
    return `${hour}:${minutes}${ampm}`;
  }
  return (
    //<Text>{hours[0].open[0].start}</Text>
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.firstCell}>
          <Text>Hours of </Text><Text>Operation: </Text>

        </View>
        <View style={styles.cell}>
          <Text>Open:</Text>
        </View>
        <View style={styles.cell}>
          <Text>Close:</Text>
        </View>
      </View>
      <View><Text>{'\n'}</Text></View>
      {hours && hours[0].open ? (
        hours[0].open.map((obj) => {
          return (
            <View style={styles.row}>
              <View style={styles.firstCell}>
                <Text>{days[obj.day]}</Text>
              </View>
              <View style={styles.cell}>
                <Text>{convertToNormalTime(obj.start)}</Text>
              </View>
              <View style={styles.cell}>
                <Text>{convertToNormalTime(obj.end)}</Text>
              </View>
            </View>
          );
        })
      ) : (
        <Text></Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  paddingLeft: 20,
  height: 250,
  width: '100%',
  borderWidth: 1,
  borderRadius: 8
},
  row: {
    flex: 1,
    alignSelf: "stretch",
    flexDirection: "row"
  },
  firstCell: {
    flex: 1,
    alignSelf: 'flex-start',
    marginRight: 20
  },
  cell: {
    flex: 1,
    alignSelf: "stretch"
  },
});

export default HoursOfOperation;
