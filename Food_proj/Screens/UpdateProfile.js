import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, ImageBackground, TouchableOpacity, useWindowDimensions, Image, ScrollView } from 'react-native';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, provider, db, storag, firebase } from "../firebase/firebase";
import * as ImagePicker from 'expo-image-picker';
import { collection, addDoc, and, onSnapshot } from "firebase/firestore";
import { doc, setDoc, getDoc, updateDoc, deleteDoc, getDocs } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export default function UpdateProfile({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setName] = useState("");
    const [lastname, setlastName] = useState("");
    const [phone, setphone] = useState("");
    const [birthdate, setbrithdate] = useState("");
    const [photo, setphoto] = useState(null);
    const [users, setusers] = useState([]);




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
        const filename = email;
        const ref = firebase.storage().ref().child("images/" + filename);

        const response = await fetch(uri);
        const blob = await response.blob();

        const snapshot = await ref.put(blob);
        console.log('Image uploaded successfully');

        const downloadURL = await snapshot.ref.getDownloadURL();
        setphoto(downloadURL);

    }
    //add data to firestore
    const findData = async () => {
        const docRef = doc(db, "users", auth.currentUser.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const data = docSnap.data();
            setName(data.firstname)
            setlastName(data.lastname)
            setbrithdate(data.birthdate)
            setphone(data.phone)
            setphoto(data.photo)
        } else {
            // docSnap.data() will be undefined in this case
            console.log("No such document!");
        }
        //location.reload()
    }
    useEffect(() => {
        findData();
    }, []);

    const updatAlldata = async () => {
        const washingtonRef = doc(db, "users", auth.currentUser.uid);

        // Set the "capital" field of the city 'DC'
        await updateDoc(washingtonRef, {
            photo: photo,
            firstname: firstname,
            lastname: lastname,
            birthdate: birthdate,
            phone: phone

        });
        navigation.navigate('Home');

    }





    const { height } = useWindowDimensions();
    const image = require("../assets/SignUp.png");
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.titleText}>Update Your Data </Text>
            </View>
            <View style={styles.loginView}>

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
                <View style={styles.inputView2}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="phone"
                        value={phone}
                        placeholderTextColor="#ababab55"
                        onChangeText={(phone) => setphone(phone)}

                    />
                </View>
                
                
                {photo && <Image source={{ uri: photo }} style={styles.photo} />}


                <TouchableOpacity onPress={updatePhoto}>
                    <Text style={styles.loginText1}>Change</Text>
                </TouchableOpacity>




                <TouchableOpacity style={styles.loginBtn} onPress={updatAlldata}   >
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
        marginTop: '-100%',
        marginBottom: '5%',
        marginLeft: "-4%",

    },
    titleText: {
        marginTop: '5%',
        marginBottom: '40%',
        color: '#ED7014',
        fontWeight: 'bold',
        fontSize: 20,

    },
    photo: {
        marginBottom: '5%',
       // marginVertical: '-50%',

        borderRadius: 500,
        borderRadius: 50,
        width: '25%',
        height: '14%',


    },
});

