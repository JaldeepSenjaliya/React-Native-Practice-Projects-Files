import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions
  } from "react-native";

  let {width: screenWidth, height: screenHeight} = Dimensions.get('window')
const PictureDetails = ({route}) => {
    return (
        <View style={styles.container}>
        <Text style={styles.titleText}>{route.params.data.item.title}</Text>
        <Image source={{uri:route.params.data.item.url}} style={styles.imageStyle} />
        <Text style={styles.explanationText}>Description: {route.params.data.item.explanation} </Text>
        </View>
    )
}


const styles = StyleSheet.create( {
    container: {
        backgroundColor: "#fff", 
        justifyContent: "center", 
        alignItems:"center"
    },
    titleText: {
        marginTop: 30,
        marginLeft: 10,
        fontWeight: "bold",
        fontSize: 25,
      },
      imageStyle: {
        height: 400,
        width: 415,
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5,
        borderRadius: 5,
      },
      explanationText: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        fontWeight: "normal",
        fontSize: 16,
      },



});

export default PictureDetails;