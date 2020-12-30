//basically going to take props of the favorites and render them dynamically.
import React from "react";
import { Text, View, StyleSheet,Image,Dimensions} from "react-native";

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH= Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    //flex: 1,
    //alignItems: "center",
  },
  titleText: {
    fontSize: 40,
  },
  image: {
    width: SCREEN_WIDTH/2,
    height: SCREEN_WIDTH/2,
    borderRadius: 100
  },
  aboutMe: {
    borderWidth:1,
    width: '80%',
    padding: 10,
    paddingTop: 0,
    borderRadius: 8
  },
  name: {
    fontSize: 35
  }
});
function ProfileTab({ businesses }) {
  return (
    <View style={styles.container}>

        <Image style={styles.image}source={require('../../../assets/profilePic/pfpic.jpg')}></Image>
    <Text style={styles.name}>Josh D., 27</Text>
      <View style={styles.aboutMe}>

        <Text style={{fontWeight: 'bold'}}>About me: </Text>
        <Text>I loooooooove Food!</Text>
      </View>
    </View>
  );
}

export default ProfileTab;
