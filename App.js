
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, Alert, View, Text, Dimensions, Image } from 'react-native';
import {useDimensions, useDeviceOrientation} from '@react-native-community/hooks';
import FirstView from './app/Views/FirstView.js'
import AppView from './app/Views/AppView.js';
import Card from './app/Views/Tabs/Card/Card.js';
import axios from 'axios';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view:0,
      businesses:[],
    };
    this.handlePress= this.handlePress.bind(this);
  }
  handlePress() {
    this.setState({
      view:1
    })
  }

  componentDidMount() {
    axios.get('http://10.0.0.9:3000/yelp').then((response) => {
      const businesses = response.data;
      this.setState({businesses});
      axios.put('http://10.0.0.9:3000/favorites').then((response) => {
        console.log('client side favorites reset');
      }).catch((err) => {
        console.log('error in favorite reset: ', err);
      })
    }).catch((err) => console.log('get request failed client side', err));
  }
  render() {
    const {view, businesses} = this.state
    const views = {
      0: <FirstView handlePress={this.handlePress}/>,
      1: <AppView businesses={businesses} toggleFavorites={this.toggleFavorites}/>

    };

    console.log('this is view: ', view)
    return (
      businesses.length? views[view]: <View><Text>no businesses</Text></View>
    );
  }
}
const containerStyle = {backgroundColor: 'orange'};
export default App;
