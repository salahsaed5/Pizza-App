import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, ImageBackground, TouchableOpacity, useWindowDimensions, Image, ScrollView } from 'react-native';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, provider, db, storag, firebase } from "../firebase/firebase";
import * as ImagePicker from 'expo-image-picker';
import { collection, addDoc, and, onSnapshot } from "firebase/firestore";
import { doc, setDoc, getDoc, updateDoc, deleteDoc, getDocs } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export default function UpdateProfile({ navigation }) {
   
    const [name, setname] = useState("");
    const [size, setsize] = useState("");
    const [weight, setweight] = useState("");
    const [price, setprice] = useState("");
    const [photo, setphoto] = useState(null);
    const [users, setusers] = useState([]);
    const [item, setitem ] = useState("");
    



    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            console.log('permission to access media library is required')
            return;
        }
        const result = await ImagePicker.launchImageLibraryAsync();
        console.log(result);
        if (!result.canceled) {
            return result.uri;
        }
    };
    const updatePhoto = async () => {
        const uri = await pickImage();
        console.log(uri);
        const filename = name;
        const ref = firebase.storage().ref().child("images1/" + filename);

        const response = await fetch(uri);
        const blob = await response.blob();

        const snapshot = await ref.put(blob);
        console.log('Image uploaded successfully');

        const downloadURL = await snapshot.ref.getDownloadURL();
        setphoto(downloadURL);

    }
    //add data to firestore
    const add = async () => {
        await setDoc(doc(db, item, name), {
            name: name ,
            size : size ,
            weight : weight ,
            price : price ,
            photo: photo

        });
        navigation.navigate('Home');
    }

    const updatAlldata = async () => {
        
        navigation.navigate('Profaile');

    }

    const { height } = useWindowDimensions();
    const image = require("../assets/SignUp.png");
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.titleText}>Enter your product </Text>
            </View>
            <View style={styles.loginView}>

                {photo && <Image source={{ uri: photo }} style={styles.photo} />}
                
                <View style={styles.inputView2}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="item"
                        value={item}
                        placeholderTextColor="#ababab55"
                        onChangeText={(item) => setitem(item)}
                    />


                </View>
                <View style={styles.inputView2}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="name"
                        value={name}
                        placeholderTextColor="#ababab55"
                        onChangeText={(name) => setname(name)}
                    />


                </View>

                <View style={styles.inputView2}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="size"
                        value={size}
                        placeholderTextColor="#ababab55"
                        onChangeText={(size) => setsize(size)}
                    />
                </View>
                <View style={styles.inputView2}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="weight"
                        value={weight}
                        placeholderTextColor="#ababab55"
                        keyboardType="numeric"
                        onChangeText={(weight) => setweight(weight)}
                    />
                </View>
                <View style={styles.inputView2}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="price"
                        value={price}
                        placeholderTextColor="#ababab55"
                        keyboardType="numeric"
                        onChangeText={(price) => setprice(price)}

                    />
                </View>




                <TouchableOpacity onPress={updatePhoto}>
                    <Text style={styles.loginText1}>Change</Text>
                </TouchableOpacity>




                <TouchableOpacity style={styles.loginBtn} onPress={add}   >
                    <Text style={styles.loginText}>submit</Text>
                </TouchableOpacity>

            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ffffff',

    },
    Background: {

        // justifyContent: 'flex-end',
        width: '100%',
        height: '100%',

    },
    loginView: {
        alignItems: 'center',
        width: '100%',
        height: '100%',

    },
    inputView: {
        backgroundColor: '#85858629',
        borderRadius: 10,
        width: '80%',
        height: '7%',
        marginTop: '20%',
        marginBottom: "4%",

    },
    inputView2: {
        backgroundColor: '#85858629',
        borderRadius: 10,
        width: '80%',
        height: '7%',
        marginBottom: '3%',

    },
    TextInput: {
        height: "100%",
        marginLeft: "8%",

    },
    loginBtn: {
        width: "60%",
        marginTop: '2%',
        marginBottom: '8%',
        borderRadius: 10,
        height: '5%',
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ED7014",
    },
    photoBtn: {
        width: "20%",
        marginTop: '3%',
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
    loginText1: {
        color: '#ED7014',
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: '-70%',
        marginBottom: '5%',
        marginLeft: "-4%",

    },
    titleText: {
        marginTop: '5%',
        marginBottom: '10%',
        color: '#ED7014',
        fontWeight: 'bold',
        fontSize: 20,

    },
    photo: {
        marginBottom: '12%',
        // marginVertical: '-50%',
        marginRight: '2%',
        borderRadius: 500,
        borderRadius: 50,
        width: '25%',
        height: '14%',


    },
});

