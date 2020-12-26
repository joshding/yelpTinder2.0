
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, Alert, View, Dimensions, Image } from 'react-native';
import {useDimensions, useDeviceOrientation} from '@react-native-community/hooks';
import FirstView from './app/Views/FirstView.js';
import SwiperView from './app/Views/SwiperView.js';
import FavoritesView from './app/Views/FavoritesView.js';
import AppView from './app/Views/AppView.js';
import axios from 'axios';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view:3,
      businesses:[],
    };
    this.changeView = this.changeView.bind(this);
  }
  changeView(view) {
    this.setState({view})
  }
  componentDidMount() {
    axios.get('http://10.0.0.9:3000/yelp').then((response) => {
      console.log('here is data: ', typeof response.data)
      const businesses = response.data;
      console.log(businesses[0].images)
      this.setState({businesses});
    }).catch((err) => console.log('get request failed client side', err));
  }
  render() {
    const {view, businesses} = this.state
    const views = {
      0: <FirstView changeView={this.changeView}/>,
      1: <SwiperView changeView={this.changeView} businesses={businesses}/>,
      2: <FavoritesView changeView={this.changeView}/>,
      3: <AppView businesses={businesses}/>
    };

    console.log('this is view: ', view)
    return (
      views[view]
    );
  }
}
const containerStyle = {backgroundColor: 'orange'};
export default App;
