//basically going to take props of the favorites and render them dynamically.
import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import axios from "axios";
import Business from "./ContactChildren/Business.js";
import network from '../../network'
import { SearchBar } from 'react-native-elements';


export default class ContactTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: [],
      search:'',
      allFavorites:[]
    };
  }
  getFavorites() {
    axios.get(network.connection + `/favorites`).then((response) => {
      //console.log("here are favorites: ", response.data);
      const allFavorites = response.data;
      this.setState({ allFavorites, favorites: allFavorites });
      //console.log('here are favorites: ', favorites);
    });
  }
  updateSearch = (search) => {
    const favorites = this.state.allFavorites.filter(business => business.name.toLowerCase().includes(search.toLowerCase()));
    this.setState({ search, favorites });
  };
  componentDidMount() {
    this.getFavorites();
  }

  render() {
    const { favorites, search } = this.state;
    return (
      <View style={{flex:1, alignItems: 'center'}}>
        <SearchBar
        onChangeText={this.updateSearch}
        value={search}
        style={styles.search}
        containerStyle={styles.searchContainer}
        inputContainerStyle={styles.inputContainer}
        //inputStyle={{backgroundColor: 'white'}}
        placeholderTextColor={'#g5g5g5'}
    placeholder={'Search a local business'}
      />
      <View style={styles.container}>

        {/* <View style={styles.title}>
          <Text style={styles.titleText}>Contact</Text>
        </View> */}
        <View style={styles.list}>
          <ScrollView>
          <Business favorites={favorites} />
          </ScrollView>
        </View>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent:'flex-start',
    marginTop: 10
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
  },
  search: {

  },
  searchContainer: {
    //flex: 1,
    //position:'absolute',

     width: 275,
     height: 45,
     borderRadius: 8,

     backgroundColor: 'white',
     borderWidth: 1,
    // borderRadius: 8


  },
  inputContainer: {
    height: 20,
    backgroundColor: 'white',

  }
});
