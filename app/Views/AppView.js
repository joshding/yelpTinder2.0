
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, Alert, View, Dimensions, ImageBackground , Image, SafeAreaView, Text, Pressable} from 'react-native';
import {useDimensions, useDeviceOrientation} from '@react-native-community/hooks';
import Swiper from 'react-native-dynamic-deck-swiper';
import MyAppText from '../MyAppText.js';
import SwiperTab from './Tabs/SwiperTab/SwiperTab.js';
import TestTab from './Tabs/TestTab.js'
import FavoritesTab from './Tabs/FavoritesTab/FavoritesTab.js';
import ProfileTab from './Tabs/ProfileTab/ProfileTab.js';
import ContactTab from './Tabs/ContactTab/ContactTab.js';
import DescriptionView from './DescriptionView.js';
import axios from 'axios';




export default class AppView extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      view:0,
      descriptionView:false,
      currentIndex: 0,
    };
    this.changeView=this.changeView.bind(this);
    this.updateDescriptionView = this.updateDescriptionView.bind(this);
    this.toggleFavorites = this.toggleFavorites.bind(this);
    this.incrementCurrentIndex=this.incrementCurrentIndex.bind(this);
  }
  changeView(view) {
    this.setState({view})
  }

  updateDescriptionView(business) {
    this.setState({descriptionView: business});
  }
  toggleFavorites(id) {
    axios.put(`http://10.0.0.9:3000/favorite/${id}`).then(() => {
    })

  }
  incrementCurrentIndex(callback) {
  this.setState({currentIndex: this.state.currentIndex + 1}, callback)
  }
  render() {
    const {businesses, toggleFavorites} = this.props;
    const {view,descriptionView, currentIndex, favorites} = this.state;
    const views = {
      0:<SwiperTab businesses={businesses} updateDescriptionView={this.updateDescriptionView} currentIndex={currentIndex} incrementCurrentIndex={this.incrementCurrentIndex} toggleFavorites={this.toggleFavorites} />,
      1: <FavoritesTab businesses={favorites}/>,
      2: <ContactTab/>,
      3: <ProfileTab/>
    };

  return (
    descriptionView ? <DescriptionView updateDescriptionView={this.updateDescriptionView} business={descriptionView}/> : (
  <View
      style ={{
        backgroundColor: "#fff",
        flex:1
      }}
      >

        <SafeAreaView  style={{
          flex: 1, flexDirection: "row", flexWrap: "wrap", justifyContent: "space-evenly"}}>
            <Pressable onPress={() => this.changeView(0)} style={view ===0? styles.highlighter:{}}>
            <Image  style={{width:30, height: 30}} source={require('../assets/icons/icons8-crown-80.png')}/>
            </Pressable>
            <Pressable onPress={() => this.changeView(1)} style={view ===1? styles.highlighter:{}}>
            <Image defaultSource={require('../assets/default/icon.png')} style={{width:30, height: 30}} source={require('../assets/icons/icons8-star-48.png')}/>
            </Pressable>
            <Pressable onPress={() => this.changeView(2)} style={view ===2? styles.highlighter:{}}>
            <Image style={{width:30, height: 30}} source={require('../assets/icons/icons8-chat-bubble-100.png')}/>
            </Pressable>
            <Pressable onPress={() => this.changeView(3)} style={view ===3? styles.highlighter:{}}>
            <Image style={{width:30, height: 30}} source={require('../assets/icons/icons8-user-48.png')}/>
            </Pressable>
          </SafeAreaView>
          <View style={{flex:12, marginTop: -20}} >
          {views[view]}
          </View>
      </View>
    )
  )
        }
}
const styles = StyleSheet.create({
  tinyLogo: {
    width: 125,
    height: 125,
    top: 75
  },
  container: {
    flex: 12,
    backgroundColor: '#F5FCFF'
  },
  card: {
    flex: 1,
     //borderRadius: 8,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    //backgroundColor: 'turquoise',
    marginTop: 0,
    marginBottom: 50,
    marginLeft: 0,
    marginRight: 0,
    borderRadius: 30,
    padding: 10,
    height: 535
  },
  text: {
    textAlign: 'center',
    fontSize: 50,
    backgroundColor: 'transparent'
  },
  picture: {
    width:'100%',
    height: '100%',

  },
  highlighter: {
    backgroundColor:'pink',
    borderRadius:100
  }
});