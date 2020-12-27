//basically going to take props of the favorites and render them dynamically.
import React from 'react';
import { Text, View, StyleSheet} from 'react-native';

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
function MessagesTab({businesses}) {

  return (
    <View style={styles.container}>
    <View style={styles.title}>
      <Text style={styles.titleText}>Messages</Text>
    </View>
    <View>

    </View>
    </View>
  );
}

export default MessagesTab;