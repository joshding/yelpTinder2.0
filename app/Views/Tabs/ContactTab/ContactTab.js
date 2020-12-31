//basically going to take props of the favorites and render them dynamically.
import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import axios from "axios";
import Business from "./ContactChildren/Business.js";
import network from '../../network'


export default class ContactTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: [],
    };
  }
  getFavorites() {
    axios.get(network.connection + `/favorites`).then((response) => {
      console.log("here are favorites: ", response.data);
      const favorites = response.data;
      this.setState({ favorites });
      //console.log('here are favorites: ', favorites);
    });
  }

  componentDidMount() {
    this.getFavorites();
  }

  render() {
    const { favorites } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titleText}>Contact</Text>
        </View>
        <View style={styles.list}>
          <ScrollView>
          <Business favorites={favorites} />
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent:'flex-start'
  },
  title: {
    flex: 1,
    alignItems: "center",
  },
  titleText: {
    fontSize: 40,
  },
  list: {
    flex: 10
  }
});
