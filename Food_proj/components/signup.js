import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, ImageBackground, TouchableOpacity, useWindowDimensions } from 'react-native';
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase";

export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setName] = useState('');
    const [lastname, setlastName] = useState('');
    const [phone, setphone] = useState('');
    const [birthdate, setbrithdate] = useState('');
    const [photo, setphoto] = useState('');

    const hundleregeister = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                alert('SignUp done');
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
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
                    <View style={styles.inputView2}>
                        <TextInput
                            style={[styles.TextInput, { color: "black" }]}
                            placeholder="photo"
                            value={photo}
                            placeholderTextColor="#ababab55"
                            onChangeText={(photo) => setphoto(photo)}
                        />
                    </View>

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

    loginText: {
        color: 'white',
        fontWeight: 'bold',

    },
});

