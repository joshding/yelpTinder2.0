//basically going to take props of the favorites and render them dynamically.
import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import axios from "axios";
import Business from "./ContactChildren/Business.js";
import network from '../../network'
import { SearchBar } from 'react-native-elements';
import Swipeable from "react-native-gesture-handler/Swipeable";


export default class ContactTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: [],
      search:'',
      allFavorites:[]
    };
    this.deleteFavorite=this.deleteFavorite.bind(this)
  }
  getFavorites() {
    axios.get(network.connection + `/favorites`).then((response) => {
      //console.log("here are favorites: ", response.data);
      const allFavorites = response.data;
      this.setState({ allFavorites, favorites: allFavorites });
      //console.log('here are favorites: ', favorites);
    });
  }
  deleteFavorite(business, index) {
    // const ref = 'swipeableRef' + index;
    // this.refs[ref].close();
    axios
      .put(network.connection +`/favorite/${business.businessId}`)
      .then(() => {
        this.setState({favorites:[]})

        this.getFavorites();

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
        placeholderTextColor={'#D8D8D8'}
    placeholder={'Search a local business'}
      />
      <View style={styles.container}>
        <View style={styles.list}>
          <ScrollView
          showsVerticalScrollIndicator={false}>
          <Business favorites={favorites} deleteFavorite={this.deleteFavorite}/>
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
    marginTop: 10,
    maxHeight: 500

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
     marginTop: 10
    // borderRadius: 8


  },
  inputContainer: {
    height: 20,
    backgroundColor: 'white',

  }
});
