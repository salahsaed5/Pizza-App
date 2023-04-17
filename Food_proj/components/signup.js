import React, { useState,useEffect } from "react";
import { StyleSheet, Text, View, TextInput, ImageBackground, TouchableOpacity, useWindowDimensions,Image } from 'react-native';
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth , provider } from "../firebase/firebase";
import * as ImagePicker from 'expo-image-picker';

export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setName] = useState('');
    const [lastname, setlastName] = useState('');
    const [phone, setphone] = useState('');
    const [birthdate, setbrithdate] = useState('');
    const [photo, setphoto] = useState(null);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
      
        console.log(result);
      
        if (!result.canceled) {
          setphoto(result.assets[0].uri);
        }
      };
      useEffect(() => {
      

      
        if(photo!=null){
          
          setphoto(null);
        }
      },[]);
      

    const hundleregeister = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                alert('SignUp done');
                navigation.navigate('Profaile');

                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(error.message);
                // ..
            });
    }

    const { height } = useWindowDimensions();
    const image = require("../assets/SignUp.png");
    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.Background}>
                <View style={styles.loginView}>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder="Email"
                            value={email}
                            placeholderTextColor="#ababab55"
                            onChangeText={(email) => setEmail(email)}
                        />
                    </View>
                    <View style={styles.inputView2}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder="Password"
                            value={password}
                            placeholderTextColor="#ababab55"
                            secureTextEntry={true}
                            onChangeText={(password) => setPassword(password)}
                        />
                    </View>
                    <View style={styles.inputView2}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder="frist name"
                            value={firstname}
                            placeholderTextColor="#ababab55"
                            onChangeText={(firstname) => setName(firstname)}
                        />
                    </View>
                    <View style={styles.inputView2}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder="last name"
                            value={lastname}
                            placeholderTextColor="#ababab55"
                            onChangeText={(lastname) => setlastName(lastname)}
                        />
                    </View>
                    <View style={styles.inputView2}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder="brith date"
                            value={birthdate}
                            placeholderTextColor="#ababab55"
                            onChangeText={(birthdate) => setbrithdate(birthdate)}
                        />
                    </View>
                    {photo && <Image source={{ uri: photo }} style={{ width: '15%', height: '15%' }} />}
                    

                    <TouchableOpacity style={styles.photoBtn} onPress={pickImage}>
                        <Text style={styles.loginText}>set photo</Text>
                    </TouchableOpacity>
                    

                    

                    <TouchableOpacity style={styles.loginBtn} onPress={hundleregeister}   >
                        <Text style={styles.loginText}>submit</Text>
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
    inputView: {
        backgroundColor: '#85858629',
        borderRadius: 10,
        width: '80%',
        height: '7%',
        marginTop: '55%',
        marginBottom: "4%",

    },
    inputView2: {
        backgroundColor: '#85858629',
        borderRadius: 10,
        width: '80%',
        height: '7%',
        marginBottom: '4%',

    },
    TextInput: {
        height: "100%",
        marginLeft: "8%",

    },
    loginBtn: {
        width: "80%",
        marginTop: '5%',
        marginBottom: '8%',
        borderRadius: 10,
        height: '5%',
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ED7014",
    },
    photoBtn: {
        width: "15%",
        marginTop: '5%',
        borderRadius: 10,
        height: '5%',
         alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ED7014",
    },

    loginText: {
        color: 'white',
        fontWeight: 'bold',

    },
});

