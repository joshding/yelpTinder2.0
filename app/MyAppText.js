import React from 'react';
import { StyleSheet, Button, Alert, View,  Image, ImageBackground, Text } from 'react-native';

function MyAppText(props) {
  return (
    <Text style={{fontSize:300}}>
      {props.children}
    </Text>
  );
}

export default MyAppText;