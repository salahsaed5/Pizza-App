import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, ImageBackground, TouchableOpacity, useWindowDimensions } from 'react-native';


export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const { height } = useWindowDimensions();
    const image =require("../assets/Signinwithoutbutton.png");
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
                <View style={styles.forgottenView}>
                    <TouchableOpacity style={[styles.loginText, { color: "#4040fdaa" }]} onPress={()=>navigation.navigate('ForgetPassword')}>
                        <Text style={styles.forgottentext}>Forgot Password ?</Text>
                    </TouchableOpacity>
                </View>


                
                <View style={styles.BtnView}>
                    <TouchableOpacity style={styles.loginBtn}  >
                        <Text style={styles.loginText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.FacebookBtn}  >
                        <Text style={styles.loginText}>Facebook</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.GoogleBtn}  >
                        <Text style={styles.loginText}>Google</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.CreateBtn}  >
                        <Text style={[styles.loginText, { color: "black" }]}>Create an account</Text>
                    </TouchableOpacity>
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
        backgroundColor: '#fffc',
        borderColor:'#505050',
        borderRadius: 10,
        width: '80%',
        height: 50,
        marginTop: 300,
        marginBottom: 20,
        
    },
    inputView2: {
        backgroundColor: '#fffc',
        borderRadius: 10,
        width: '80%',
        height: 50,
        marginBottom: 20,
        
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
        marginLeft: -120,
        paddingLeft: 125,
    },
    forgottentext: {
        color:'#ED7014',
    },
    loginBtn: {
        width: "80%",
        marginTop: 40, 
        marginBottom: 45,
        borderRadius: 10,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ED7014",
    },
    FacebookBtn: {
        width: "40%",
        marginRight: 160,
        marginBottom: -40,
        borderRadius: 10,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "blue",
    },
    GoogleBtn: {
        width: "40%",
        marginLeft: 160,
        marginBottom: 10,
        borderRadius: 10,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "red",
    },
    CreateBtn: {
    },
    loginText: {
        color: 'white',
        fontWeight: 'bold',

    },
});

