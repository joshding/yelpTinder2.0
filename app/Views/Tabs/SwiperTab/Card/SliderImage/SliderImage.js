
import React from 'react';
import { View, Text,Image,  ImageBackground, StyleSheet, Pressable, Modal, TouchableHighlight, Dimensions, ScrollView } from 'react-native';
import HoursOfOperation from '../../../HoursOfOperation';
import ModalDescription from '../../../ModalDescription';
import TestTab from '../../../TestTab';
import FastImage from 'react-native-fast-image';
import businessImages from '../../../../../assets/businessImages'

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const PATH = '../../../../../assets/yelpStarsLg/large_';
const FORMAT = '.png'
const STARS = {
  1:require(`${PATH}1${FORMAT}`),
  '1.5': require(`${PATH}1_half${FORMAT}`),
  2: require(`${PATH}2${FORMAT}`),
  '2.5': require(`${PATH}2_half${FORMAT}`),
  3: require(`${PATH}3${FORMAT}`),
  '3.5': require(`${PATH}3_half${FORMAT}`),
  4: require(`${PATH}4${FORMAT}`),
  '4.5': require(`${PATH}4_half${FORMAT}`),
  5: require(`${PATH}5${FORMAT}`)
}
const XLPATH= '../../../../../assets/yelpStarsXLg/extra_large_';
const XLSTARS = {
  1:require(`${XLPATH}1${FORMAT}`),
  '1.5': require(`${XLPATH}1_half${FORMAT}`),
  2: require(`${XLPATH}2${FORMAT}`),
  '2.5': require(`${XLPATH}2_half${FORMAT}`),
  3: require(`${XLPATH}3${FORMAT}`),
  '3.5': require(`${XLPATH}3_half${FORMAT}`),
  4: require(`${XLPATH}4${FORMAT}`),
  '4.5': require(`${XLPATH}4_half${FORMAT}`),
  5: require(`${XLPATH}5${FORMAT}`)
}

const PATH_TO_ASSETS= '../../../../../assets';
//const BUSINESS_IMAGES = new Array(50).fill(0).map((path, index) => require(`../../../../../assets/businessImages/image1.jpg`) );
const BUSINESS_IMAGES = new Array(50).fill(0).map((path, index) => require(`../../../../../assets/businessImages/image1.jpg`) );
//BUSINESS_IMAGES= require(BUSINESS_IMAGES[0])

class SliderImage extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      modalVisible:false,
    }
    this.setModalVisible= this.setModalVisible.bind(this);
  }
  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

render() {
  const {business, updateDescriptionView} = this.props;

const { modalVisible } = this.state;
//console.log('from within sliderImage', business.categories.map(category => category.title).join(', '))
//console.log(business.images)

  return business ? (
    <ImageBackground
      style={styles.img}
      imageStyle={styles.imgStyle}
      source={businessImages[business.businessId]}
    >
      <View style={styles.container}></View>
      <View style={styles.topHalf}>
        {business.isOpenNow ? (
          <View style={styles.openNowSign}>
            <Text style={styles.openNow}>Open Now!</Text>
          </View>
        ) : (
          <Text></Text>
        )}
      </View>
      <View style={styles.bottomHalf}>
        <Pressable
          onPress={() => {
            this.setModalVisible(true);
          }}
        >
          <Text style={styles.text}>{business.name}</Text>

          <View style={styles.rating}>
            <Image style={styles.stars} source={STARS[business.rating]}></Image>
            <Text style={styles.secondaryText}>
              {" "}
              {business.reviewCount} reviews
            </Text>
          </View>
          <Text style={styles.secondaryText}>
            Price range: {business.price}
          </Text>
           {business && business.categories? <Text style={styles.secondaryText}>Categories: {business.categories.map(category => category.title).join(', ')}</Text>: <Text></Text>}
        </Pressable>
      </View>

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
                <TouchableHighlight
                  style={{ ...styles.openButton }}
                  onPress={() => {
                    this.setModalVisible(!modalVisible);
                  }}
                  underlayColor="transparent"
                >
                  <Image
                    style={styles.backButton}
                    source={require("../../../../../assets/icons/icons8-back-arrow-64.png")}
                  ></Image>
                </TouchableHighlight>
                <Image
                  style={styles.modalImage}
                  source={{ uri: business.images[0] }}
                ></Image>
                <View style={styles.modalDescriptionView}>
                  {/* <View style={styles.modalTitleView}>
                    <Text style={styles.modalTitleText}>{business.name}</Text>
                    <Text style={styles.miles}>{business.distance}mi</Text>
                  </View>
                  <View style={styles.rating}>
                    <Image source={XLSTARS[business.rating]}></Image>
                    <Text style={styles.modalReviewCount}>
                      {" "}
                      {business.reviewCount} reviews
                    </Text>
                  </View>
                  <Text style={styles.modalPriceRange}>
                    Price Range: {business.price}
                  </Text>
                  {business && business.categories? <Text style={styles.modalPriceRange}>Categories: {business.categories.map(category => category.title).join(', ')}</Text>: <Text></Text>} */}
                  {business ? <ModalDescription business={business}/>: <Text></Text>}
                  <Text>{'\n'}</Text>
                   {business && business.hours ? <HoursOfOperation hours={business.hours}/>: <Text></Text>}
                   {/* <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.textStyle}>Back</Text>
              </TouchableHighlight> */}
                </View>
                </ScrollView>
              </View>

          </View>
        </Modal>
      </View>
    </ImageBackground>
  ) : (
    <Text>no image</Text>
  );
      }
}
const styles = StyleSheet.create({
  img: {
    flex:1, height:null,width:null, resizeMode: 'cover'
  },
  imgStyle: {borderRadius:20},
  container: {
    flex:1
  },

  topHalf: {
    flex: 20
  },
  bottomHalf: {
    flex:10,
    padding: 10
  },
  text:{
    fontSize: 35,
    color: 'white',
    fontWeight: '800'
  },
  secondaryText: {
    fontSize: 20,
    color:'white'
  },
  rating: {
    flex:0,
    flexDirection:'row'
  },
  openNow: {
    color:'red',
    //left: 20,
    fontSize:15
  },
  openNowSign: {
    flex: 1,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor:'white',
    width: 100,
    height: 40,
    left: 20,
    position:'absolute',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'red',
  },
  stars: {
    top:3
  },
  centeredView: {
    flex: 1,
    //justifyContent: "center",
    //alignItems: "center",
    marginTop: 22
  },
  modalView: {
    //margin: 20,
    backgroundColor: "white",
    //borderRadius: 20,
    //padding: 35,
    //alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    width: WIDTH,
    height: HEIGHT,
    marginTop: -20,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    //textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    //textAlign: "center"
  },
  modalImage: {
    height: WIDTH,
    width: WIDTH,
  },
  backButton: {
    height: 50,
    width: 50,
    //position:'absolute'
    marginTop: -40,
    backgroundColor: 'transparent',
  },
  openButton: {
    //backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    //marginTop: 50,
    zIndex: 1000,
    position:'absolute',
    left: 0,
    top:40
  },
  modalTitleText: {
    fontSize: 40,
    fontWeight: '800',
    paddingBottom: 10
  },
  modalReviewCount: {
    fontSize: 25,
    marginTop: 3
  },
  modalPriceRange: {
    fontSize: 25
  },
  modalTitleView: {
    flex:0,
    flexDirection: 'row'

  },
  miles: {
    position:'absolute',
    fontSize:15,
    right:0
  },
  modalDescriptionView: {
    padding:10
  }

})

export default SliderImage;