import { StyleSheet, Text, View, TextInput, ImageBackground, TouchableOpacity, useWindowDimensions } from 'react-native';
import React from 'react'
const GetStart = ({ navigation }) => {

  const image = require("../assets/GetStart.png");
  const imagee =require("../assets/buttons/GetStartBTN.png");


  return (
    <View style={styles.container}>
      <ImageBackground  source={image} style={styles.Background}>

      <TouchableOpacity  onPress={() => navigation.push('GetStart2')} >
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
    width : "80%",
  // backgroundColor:Colors.primary ,
    height:40,
    justifyContent:"flex-end",
    alignItems:"flex-end",
    marginLeft: 90,
    marginVertical: 650,
    borderRadius :55 ,
},

});