import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, ImageBackground, TouchableOpacity, useWindowDimensions, Image } from 'react-native';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, provider, db, storag, firebase } from "../firebase/firebase";
import * as ImagePicker from 'expo-image-picker';
import { collection, addDoc, and, onSnapshot } from "firebase/firestore";
import { doc, setDoc, getDoc, updateDoc, deleteDoc, getDocs } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setName] = useState('');
    const [lastname, setlastName] = useState('');
    const [phone, setphone] = useState('');
    const [birthdate, setbrithdate] = useState('');
    const [photo, setphoto] = useState(null);
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [firstnameError, setNameError] = useState('');
    const [lastnameError, setlastNameError] = useState('');

    const [users, setusers] = useState({});

    const hundelsumbit = () => {
        let isValid = true;

        if (firstname.trim() === "") {
            setNameError("Please enter your FirstName");
            isValid = false;
        }

        if (lastname.trim() === "") {
            setlastNameError("Please enter your FirstName");
            isValid = false;
        }

        if (email.trim() === "") {
            setEmailError("Please enter your Email");
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setEmailError("Please enter a valid Email address");
            isValid = false;
        }

        if (password.trim() === "") {
            setPasswordError("Please enter your Password");
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setPasswordError("Password must be at least 6 Chracter");
            isValid = false;
        }

        if (isValid) {
            hundleregeister();
        }
    };


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
    const add = async () => {
        await setDoc(doc(db, "users", auth.currentUser.uid), {
            email: email,
            password: password,
            lastname: lastname,
            firstname: firstname,
            phone: phone,
            birthdate: birthdate,
            photo: photo

        });
    }


    const hundleregeister = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                alert('SignUp done');
                navigation.navigate('Home');
                add();

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
                    <View style={styles.photoView}>
                        {photo && <Image source={{ uri: photo }} style={styles.photo} />}
                    </View>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder="Email"
                            value={email}
                            placeholderTextColor="#ababab55"
                            onChangeText={(email) => { setEmail(email); setEmailError(""); }}
                        />
                    </View>
                    {emailError ? <Text style={styles.error}>{emailError}</Text> : null}
                    <View style={styles.inputView2}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder="Password"
                            value={password}
                            placeholderTextColor="#ababab55"
                            secureTextEntry={true}
                            onChangeText={(password) => { setPassword(password); setPasswordError(""); }}
                        />
                    </View>
                    {passwordError ? <Text style={styles.error}>{passwordError}</Text> : null}
                    <View style={styles.inputView2}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder="frist name"
                            value={firstname}
                            placeholderTextColor="#ababab55"
                            onChangeText={(firstname) => { setName(firstname); setNameError(""); }}
                        />
                    </View>
                    {firstnameError ? <Text style={styles.error}>{firstnameError}</Text> : null}
                    <View style={styles.inputView2}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder="last name"
                            value={lastname}
                            placeholderTextColor="#ababab55"
                            onChangeText={(lastname) => { setlastName(lastname); setlastNameError("") }}
                        />
                    </View>
                    {lastnameError ? <Text style={styles.error}>{lastnameError}</Text> : null}
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
                            keyboardType="numeric"
                            placeholderTextColor="#ababab55"
                            onChangeText={(phone) => setphone(phone)}

                        />
                    </View>



                    <TouchableOpacity style={styles.photoBtn} onPress={updatePhoto}>
                        <Text style={styles.loginText}>set photo</Text>
                    </TouchableOpacity>




                    <TouchableOpacity style={styles.loginBtn} onPress={hundelsumbit}   >
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
        marginTop: '5%',
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
        marginTop: '2%',
        marginBottom: '8%',
        borderRadius: 10,
        height: '5%',
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ED7014",
    },
    photoView: {
        marginTop: '25%',
        marginBottom: '-3%',

        backgroundColor: '#85858629',
        borderRadius: 50,
        width: '30%',
        height: '15%',
    },
    photo: {
        borderRadius: 100,
        width: '100%',
        height: '100%',
        
    },
    photoBtn: {
        width: "80%",
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
    error: {},
});

