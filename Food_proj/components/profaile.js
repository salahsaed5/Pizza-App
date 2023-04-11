import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, ImageBackground, TouchableOpacity, useWindowDimensions } from 'react-native';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signOut } from "firebase/auth";
import { auth, provider } from "../firebase/firebase";

export default function Profaile({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const image = require("../assets/Myprofile without Buttons.png");
    const handelsignout =() => {
  


        signOut(auth).then(() => {
          navigation.navigate("Login")
        }).catch((error) => {
          // An error happened.
        });
            
          }

return(
    <View style={styles.container}>
    <ImageBackground source={image} style={styles.Background}>
        <Text style={styles.loginText}>{auth.currentUser.email}</Text>
        <TouchableOpacity style={styles.loginBtn} onPress={handelsignout} >
                            <Text style={styles.loginText2}>logout</Text>
                        </TouchableOpacity>
    </ImageBackground>

</View>
);

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    Background: {

        // justifyContent: 'flex-end',
        width: '100%',
        height: '100%',

    },
    loginView: {
        alignItems: 'center',
        width: '100%',
    },
    
    
    loginBtn: {
        width: "80%",
        marginTop: '10%',
        marginBottom: '8%',
        marginLeft:"10%",
        borderRadius: 10,
        height: '5%',
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ED7014",
    },

    loginText: {
        marginTop: '20%',
        marginLeft:"25%",
        color: 'black',
        fontWeight: 'bold',
        fontSize:24,

    },
    loginText2: {
        color: 'white',
        fontWeight: 'bold',

    },
});