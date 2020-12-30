//basically going to take props of the favorites and render them dynamically.
import React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import axios from 'axios';
import Business from './ContactChildren/Business.js'

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
  }
})
export default class ContactTab extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      favorites:[]
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
    const {favorites} = this.state;
    return (
    <View style={styles.container}>
    <View style={styles.title}>
      <Text style={styles.titleText}>Contact</Text>
    </View>
    <View>
      <Business favorites={favorites}/>
    </View>
    </View>
  );
}
}


