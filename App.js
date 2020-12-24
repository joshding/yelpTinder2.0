
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, Alert, View, Dimensions, Image } from 'react-native';
import {useDimensions, useDeviceOrientation} from '@react-native-community/hooks';
import FirstView from './app/FirstView.js';
import SecondView from './app/SecondView.js';




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view:1,
    };
    this.changeView = this.changeView.bind(this);
  }
  changeView() {
    this.setState({view: this.state.view? 0:1})
  }
  render() {
    return (
      this.state.view ? <SecondView/> : <FirstView/>
    );
  }
}
// export default function App() {
//   const handlePress = () => console.log('Image Tapped');
//   const {landscape} = useDeviceOrientation();
//   return (
//     <View
//     style ={{
//       backgroundColor: "#fff",
//       flex: 1,
//       flexDirection: "column",
//       // justifyContent: "center", //main
//       // alignItems: "center", //secondary
//       // alignContent:"center",
//     }}
//     >
//       <View style={{
//         backgroundColor: "dodgerblue",
//         flex: 8, flexDirection: "row", justifyContent: "center"}}>
//           <Image
//         style={styles.tinyLogo}
//         source={require('./assets/adaptive-icon.png')}
//       />
//         </View>
//       <View style={{
//         backgroundColor: "gold",
//         flex: 1
//     }}/>
//       <View style={{
//         backgroundColor: "tomato",
//         flex: 1}}/>
//     </View>
//   );
// }

const containerStyle = {backgroundColor: 'orange'};
export default App;

/*
view is like a div. grouping and laying out children.

Text: if text gets truncated,

StyleSheet.create will validate the properties. validation doesn't happen with plain javascript object.
StyleSheet.create could be optimized.
styles on left overwrite styles on right

*/