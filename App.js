
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, Alert, View, Dimensions, Image } from 'react-native';
import {useDimensions, useDeviceOrientation} from '@react-native-community/hooks';
import FirstView from './app/Views/FirstView.js';
import SwiperView from './app/Views/SwiperView.js';
import FavoritesView from './app/Views/FavoritesView.js';
import AppView from './app/Views/AppView.js';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view:3,
    };
    this.changeView = this.changeView.bind(this);
  }
  changeView(view) {
    this.setState({view})
  }
  render() {
    const views = {
      0: <FirstView changeView={this.changeView}/>,
      1: <SwiperView changeView={this.changeView}/>,
      2: <FavoritesView changeView={this.changeView}/>,
      3: <AppView />
    };
    const {view} = this.state
    console.log('this is view: ', view)
    return (
      views[view]
    );
  }
}
const containerStyle = {backgroundColor: 'orange'};
export default App;
