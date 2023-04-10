import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, ImageBackground, TouchableOpacity, useWindowDimensions, Button } from 'react-native';
import { SafeAreaView } from 'react-native';
import CustomButton from '../compo/CustomButton';
import Custominput from '../compo/CustomButton';
import ForgotPassword from '../assets/ForgetPassword.png';

export default function ForgetPassword({ navigation }) {

const [Email,setEmail]=useState('');
const handleForgetPassword= ()=>{
    console.log("done")
};
const hhandleForgetPassword= ()=>{
    console.log("done")
    navigation.navigate('Login');

};



return (

        <View style={styles.container}>

            <ImageBackground source={ForgotPassword} style={[{ width: '134%', height: '128%' }]}>
                {<View style={styles.inputView}>
                  <TextInput
                            style={styles.TextInput}
                            placeholder="Email"
                            value={Email}
                            placeholderTextColor="#ababab55"
                            onChangeText={(Email) => setEmail(Email)}
                        />
  

                </View> }
                
                <View style={styles.BtnView}>
                        <TouchableOpacity style={styles.BotnView}  onPress={handleForgetPassword}>
                            <Text style={styles.text}>Send Link</Text>
                        </TouchableOpacity>
                </View>
                <View style={styles.BtnView}>
                        <TouchableOpacity style={styles.BootnView} onPress={hhandleForgetPassword} >
                            <Text style={styles.text}>Sign In</Text>
                        </TouchableOpacity>
                </View>
                
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: null,
        width: null,
    },
    Background: {

        //justifyContent: 'flex-end',
        //width: '100%',
    },


    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'red',
    },
    image: {
        width: 290,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5,
    },
    inputt: {
        marginTop: 50,
        color: 'blue',

    },
    input: {
        width: '70%',
        height: 50,
        marginBottom: 20,
        margintop: 10,
        borderColor: 'red',
        borderWidth: 2,
        padding: 9,


    },
    loginView: {
        alignItems: 'center',
        width: '100%',
    },
    inputView: {
        backgroundColor: '#F3F3F3',
        borderRadius: 17,
        width: '70%',
        height: 45,
        marginTop: 350,
        marginBottom: 100,
        marginLeft: 87,
        paddingHorizontal: 10,
        alignItems: 'flex-start',
    },
    TextInput: {
        height: 50,
        padding: 10,
        marginLeft: 20,
        marginBottom: 10,
        fontSize: 20,
        //borderColor:'black',
    },
    BtnView: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '90%',
    },
    forgottenView: {
        marginBottom: 40,
        marginLeft: 100,
        paddingLeft: 125,
    },
    btn:{
        padding: 20,
        marginVertical: -80,
        alignItems: "center",
        backgroundColor: "green",
        borderRadius: 17,
        width: '30%',
        paddingHorizontal: 15,
        marginLeft: 205,
        top: 30,
      },
          BotnView: {
        padding: 10,
        marginVertical: -80,
        alignItems: "center",
        backgroundColor: "green",
        borderRadius: 17,
        width: '30%',
        paddingHorizontal: 15,
        marginLeft: 90,
        top: 30,
          },
          BootnView: {
            padding: 10,
            marginVertical: -100,
            alignItems: "center",
            backgroundColor: "gray",
            borderRadius: 17,
            width: '30%',
            paddingHorizontal: 15,
            marginLeft: 90,
            top: 300,
              },
    
          BtnView: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '90%',
    },
          text: {
        fontWeight: "bold",
        fontSize: 20,
        Color: "black",
    },

 
})