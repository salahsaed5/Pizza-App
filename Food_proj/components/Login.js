import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, ImageBackground, TouchableOpacity, useWindowDimensions } from 'react-native';
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase/firebase";


export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const hundlelogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                // navigation.navigate('Home');
                alert('Login done');
                navigation.navigate('Profaile');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert('Not valid email or password');
            });
    }
    function hundelgoogle() {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                // const credential = GoogleAuthProvider.credentialFromResult(result);
                // const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                // ...
                alert(user.displayName);
                
                navigation.navigate('profaile');
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });

    }

    const { height } = useWindowDimensions();
    const image = require("../assets/Signinwithoutbutton.png");
    return (
        <View style={styles.container}>
            <ImageBackground resizeMode="cover" source={image} style={styles.Background}>
                <View style={styles.loginView}>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder="Email"
                            value={email}
                            placeholderTextColor="#95908a"
                            onChangeText={(email) => setEmail(email)}
                        />
                    </View>
                    <View style={styles.inputView2}>
                        <TextInput
                            style={[styles.TextInput, { color: "black" }]}
                            placeholder="Password"
                            value={password}
                            placeholderTextColor="#95908a"
                            secureTextEntry={true}
                            onChangeText={(password) => setPassword(password)}
                        />
                    </View>
                    <View style={styles.forgottenView}>
                        <TouchableOpacity style={[styles.loginText, { color: "#4040fdaa" }]} onPress={() => navigation.navigate('ForgetPassword')}>
                            <Text style={styles.forgottentext}>Forgot Password ?</Text>
                        </TouchableOpacity>
                    </View>



                    <View style={styles.BtnView}>
                        <TouchableOpacity style={styles.loginBtn} onPress={hundlelogin} >
                            <Text style={styles.loginText}>Login</Text>
                        </TouchableOpacity>
                        <View style={styles.GoogleView}>
                            <TouchableOpacity style={styles.FacebookBtn}  >
                                <Text style={styles.loginText}> Facebook</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.GoogleBtn} onPress={hundelgoogle}>
                                <Text style={styles.loginText}>Google</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.CreateBtn}>
                            <TouchableOpacity onPress={() => navigation.navigate('signup')} >
                                <Text style={[styles.loginText, { color: "#ED7014" }]}>Create an account</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
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
        borderColor: '#505050',
        borderRadius: 10,
        width: '80%',
        height: "7%",
        marginTop: "50%",
        marginBottom: "10%",

    },
    inputView2: {
        backgroundColor: '#85858629',
        borderRadius: 10,
        width: '80%',
        height: "7%",
        marginBottom: "10%",

    },
    TextInput: {
        height: "100%",
        // padding: "5%",
        marginLeft: "5%",
    },
    BtnView: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '90%',
    },
    GoogleView: {
        flexDirection: 'row',
        width: "40%",
        height: "20%",
        marginRight: "40%",
    },
    forgottenView: {
        marginRight: "30%",
        paddingLeft: "30%",
    },
    forgottentext: {
        color: '#ED7014',
    },
    loginBtn: {
        width: "80%",
        marginTop: "10%",
        marginBottom: "20%",
        borderRadius: 10,
        height: "13%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ff8a00",
    },
    FacebookBtn: {
        width: "100%",
        marginRight: "5%",
        // marginBottom: "20%",
        borderRadius: 10,
        height: "50%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#3c5a99",
    },
    GoogleBtn: {
        width: "100%",
        // marginLeft: "45%",
        // marginBottom: "20%",
        borderRadius: 10,
        height: "50%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f95341",
    },
    CreateBtn: {
        marginLeft: "45%",
        marginVertical: "-0.7%",
        
    },
    loginText: {
        color: 'white',
      //  marginHorizontal:"10%",
    },
  
});

