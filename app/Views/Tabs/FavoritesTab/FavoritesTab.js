//basically going to take props of the favorites and render them dynamically.
import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, Alert,
  Modal,
  TouchableHighlight,Pressable} from 'react-native';
import axios from 'axios';
import FavoritesModal from './FavoritesModal.js';


const SMPATH= '../../../assets/yelpStarsSm/small_';
const FORMAT = '.png'
const SMSTARS = {
  1:require(`${SMPATH}1${FORMAT}`),
  '1.5': require(`${SMPATH}1_half${FORMAT}`),
  2: require(`${SMPATH}2${FORMAT}`),
  '2.5': require(`${SMPATH}2_half${FORMAT}`),
  3: require(`${SMPATH}3${FORMAT}`),
  '3.5': require(`${SMPATH}3_half${FORMAT}`),
  4: require(`${SMPATH}4${FORMAT}`),
  '4.5': require(`${SMPATH}4_half${FORMAT}`),
  5: require(`${SMPATH}5${FORMAT}`)
}
class FavoritesTab extends React.Component {
constructor(props) {
  super(props);
  this.state={
    favorites:[],
    modalVisible: false,
    currentModalBusiness:{}
  }
  this.setModalVisible=this.setModalVisible.bind(this);
}
getFavorites() {
  axios.get(`http://10.0.0.9:3000/favorites`).then(response => {
    console.log('here are favorites: ', response.data)
    const favorites = response.data;
    this.setState({favorites});
    //console.log('here are favorites: ', favorites);
  });
}

setModalVisible = (visible, business) => {
  this.setState({ modalVisible: visible, currentModalBusiness:business });
}
componentDidMount() {
this.getFavorites();
}
render() {
  //const {businesses} = this.props;
  const { modalVisible, currentModalBusiness } = this.state;
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
          <Pressable onPress={() => {
            this.setModalVisible(true, business);
          }}>
          <View style={styles.favoriteContainer}>
            <Image style={styles.image} source={{uri: business.images[0]}}></Image>
            <View style={styles.description}>
              <Text>{business.name}</Text>
              <Text>{business.address}</Text>
              <View style={styles.reviewCount}>
              <Image source={SMSTARS[business.rating]}></Image>
              <Text> {business.reviewCount} reviews</Text>
              </View>
          </View>
          <FavoritesModal business={currentModalBusiness} modalVisible={modalVisible} setModalVisible={this.setModalVisible}/>
        </View>
        </Pressable>
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

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center'
  },
  title: {
    flex: 1,
    // alignItems: 'center',
     position:'absolute'
    // borderWidth: 1,
    // marginBottom: -100
  },
  titleText: {
    fontSize: 40,
  },
  favoriteList: {
    flex:10,
    padding: 20,
    maxHeight: 300,
    marginTop:300,

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
  },
  reviewCount: {
    flex:1,
    flexDirection:'row'
  },
  description: {
    padding:10
  }
})

export default FavoritesTab;