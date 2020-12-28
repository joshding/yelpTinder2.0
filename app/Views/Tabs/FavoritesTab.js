//basically going to take props of the favorites and render them dynamically.
import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView} from 'react-native';
import axios from 'axios';

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  title: {
    flex: 1,
    alignItems: 'center',
  },
  titleText: {
    fontSize: 40
  },
  favoriteList: {
    flex:10,
    padding: 20,
    maxHeight: 300,
    marginTop: 0
  },
  image: {
    width:50,
    height: 50
  },
  favoriteContainer: {
    flex:1,
    flexDirection:'row',
    borderWidth:1,
    borderColor: 'black',
    alignItems: 'center',
    borderRadius: 10,
    maxHeight: 70,
    minHeight: 70,
  },
  favoritesList: {
    flex: 1,
    //borderWidth:1,
    //borderColor: 'black',
    marginTop: -275,
  }
})
class FavoritesTab extends React.Component {
constructor(props) {
  super(props);
  this.state={
    favorites:[],
  }
}
getFavorites() {
  axios.get(`http://10.0.0.9:3000/favorites`).then(response => {
    console.log('here are favorites: ', response.data)
    const favorites = response.data;
    this.setState({favorites});
    //console.log('here are favorites: ', favorites);
  });
}
componentDidMount() {
this.getFavorites();
}
render() {
  //const {businesses} = this.props;
  const businesses= this.state.favorites;
  return (
    <View style={styles.container}>
    <View style={styles.title}>
      <Text style={styles.titleText}>Favorites</Text>
    </View>
    <View style={styles.favoriteList}>
      <ScrollView style={styles.favoritesList}>
      {businesses.length? businesses.map(business => {
        return (
          <View style={styles.favoriteContainer}>
            <Image style={styles.image} source={{uri: business.images[0]}}></Image>
            <View>
        <Text>{business.name}</Text>
        <Text>{business.address}</Text>
        </View>
        </View>
        )
      }): <Text>no favorites yet</Text>}
      </ScrollView>
    </View>

    <View>

    </View>
    </View>
  );
    }
}

export default FavoritesTab;