import React from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image
} from "react-native";

function ContactModal({ setModalVisible, modalVisible, favorite }) {
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
            {favorite && favorite.images? <Image style={styles.image} source={{uri: favorite.images[0]}}></Image>: <Text></Text>}
            {favorite ? (
              <View>
                <Text style={styles.modalText}>{favorite.name}</Text>
                <Text style={styles.modalText}>{favorite.phoneNumber}</Text>
              </View>
            ) : (
              <Text></Text>
            )}
            {/* <View style={styles.allButtons}> */}
              <View style={styles.contactButtons}>
                <TouchableHighlight
                  style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}
                >
                  <Text style={styles.textStyle}>Call</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}
                >
                  <Text style={styles.textStyle}>Text</Text>
                </TouchableHighlight>
              </View>
              <View style={styles.backButton}>
                <TouchableHighlight
                  style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}
                >
                  <Text style={styles.textStyle}>Back</Text>
                </TouchableHighlight>
              </View>
            {/* </View> */}
          </View>
        </View>
      </Modal>

      {/* <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </TouchableHighlight> */}
    </View>
  );
}
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    //marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    //padding: 35,
    alignItems: "center",
    //justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: 250,
    height: 300,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    //fontSize: 30
  },
  contactButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  backButton: {
    //height: '100%'
    //flex: .1,
    //borderWidth: 1,
    //top: 0
    //marginTop: 100
    //alignSelf: "flex-end",
  },
  allButtons: {
     //flexDirection: 'column',
    // alignItems: 'center'
  },
  image: {
    width: '100%',
    height: '50%',
    borderRadius: 8
  }
});
export default ContactModal;
