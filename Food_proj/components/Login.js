import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, ImageBackground, TouchableOpacity, useWindowDimensions } from 'react-native';


export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const { height } = useWindowDimensions();
    const image =require("../assets/Signinwithoutbutton.png");
    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={[styles.Background, { height: height * 0.35 }]}>
                
            </ImageBackground>
            <View style={styles.loginView}>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Email"
                        value={email}
                        placeholderTextColor="#fffc"
                        onChangeText={(email) => setEmail(email)}
                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Password"
                        value={password}
                        placeholderTextColor="#fffc"
                        secureTextEntry={true}
                        onChangeText={(password) => setPassword(password)}
                    />
                </View>
                <View style={styles.forgottenView}>
                    <TouchableOpacity style={[styles.loginText, { color: "#4040fdaa" }]} onPress={()=>navigation.navigate('ForgetPassword')}>
                        <Text >forgotten password</Text>
                    </TouchableOpacity>
                </View>


                
                <View style={styles.BtnView}>
                    <TouchableOpacity style={styles.loginBtn}  >
                        <Text style={styles.loginText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.CreateBtn}  >
                        <Text style={[styles.loginText, { color: "black" }]}>Create an account</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    Background: {
        
        justifyContent: 'flex-end',
        width: '100%',
    },
    loginView: {
        alignItems: 'center',
        width: '100%',
    },
    inputView: {
        backgroundColor: '#ababab55',
        borderRadius: 10,
        width: '90%',
        height: 50,
        marginTop: 20,
        marginBottom: 20,
        alignItems: 'flex-start',
    },
    TextInput: {
        height: 50,
        padding: 10,
        marginLeft: 20,

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
    loginBtn: {
        width: "100%",
        marginBottom: 10,
        borderRadius: 10,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#2c7437",
    },
    CreateBtn: {
    },
    loginText: {
        color: 'white',
        fontWeight: 'bold',

    },
});

