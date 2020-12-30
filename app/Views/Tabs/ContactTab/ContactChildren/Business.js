import React from 'react';
import { Text, View, StyleSheet} from 'react-native';

function Business({favorites}) {
  return (
    favorites.map(favorite => {
      return <View><Text>{favorite.name}</Text></View>
    })
  );
}
const styles = StyleSheet.create({

})

export default Business;