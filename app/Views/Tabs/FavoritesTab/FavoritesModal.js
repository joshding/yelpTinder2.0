import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, Alert,
  Modal,
  TouchableHighlight,
Dimensions} from 'react-native';
import FavoritesReview from './FavoritesReview/FavoritesReview.js';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;


function FavoritesModal({setModalVisible, modalVisible, business}) {
  console.log(business)
  return (
    <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <ScrollView>
                {business && business.images?
                <Image style={styles.image} source={{uri:business.images[0]}}></Image>: <Text></Text>
                }
                <Text style={styles.modalTitle}>{business? business.name: ''}</Text>

              <Text style={styles.modalTitle}>{business ? business.name+"'s reviews": ''}</Text>
              <View style={styles.reviewSection}>
               {business && business.reviews ? business.reviews.map(review => {
                return review ? <FavoritesReview review={review}/>: <Text></Text>
              }): <Text></Text>}
              </View>
                <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "red" }}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.textStyle}>Read More Reviews On Yelp</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.textStyle}>Back</Text>
              </TouchableHighlight>
              </ScrollView>
            </View>
          </View>
        </Modal>
      </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    //marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    //padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width:SCREEN_WIDTH,
    height: SCREEN_HEIGHT
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  modalTitle: {
    fontSize: 30
  },
  image: {
    height: SCREEN_WIDTH,
    width: SCREEN_WIDTH
  },
  reviewSection: {
    flex: 1,
    alignItems:'center'
  }
})

export default FavoritesModal;