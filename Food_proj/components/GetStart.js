import { StyleSheet, Text, View, TextInput, ImageBackground, TouchableOpacity, useWindowDimensions } from 'react-native';
import React from 'react'
const GetStart = ({ navigation }) => {

  const image = require("../assets/GetStart.png");
  const imagee = require("../assets/buttons/GetStartBTN.png");


  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.Background}>

        <View style={styles.btnn}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')} >
            <Text style={[styles.logginText, { color: "#ED7014" }]}>Skip </Text>
          </TouchableOpacity></View>


        <TouchableOpacity onPress={() => navigation.push('GetStart2')} >
          <ImageBackground source={imagee} style={styles.btn}>






          </ImageBackground>

        </TouchableOpacity>





      </ImageBackground>


    </View>



  );
}

export default GetStart

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  Background: {

    width: '100%',
    height: '100%',

  },
  btn: {
    width: "80%",
    // backgroundColor:Colors.primary ,
    height: "20%",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginLeft: "19%",
    top: -40,
    marginVertical: "150%",
    borderRadius: 55,

  },
  btnn: {
    marginLeft: "88%",
    marginVertical: "2%",

  },
  CreateBtn: {
    marginLeft: "88%",
    marginVertical: "2%",


  },
  loginText: {
    color: 'black',
    //  marginHorizontal:"10%",
  },

  logginText: {
    fontWeight: "bold",
    color: 'black',
    //  marginHorizontal:"10%",
  },
});