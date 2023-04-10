import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, ImageBackground, TouchableOpacity, useWindowDimensions } from 'react-native';


export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setName] = useState('');
    const [lastname, setlastName] = useState('');
    const [phone, setphone] = useState('');
    const [birthdate, setbrithdate] = useState('');
    const [photo, setphoto] = useState('');



    const { height } = useWindowDimensions();
    const image =require("../assets/SignUp.png");
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
                        style={styles.TextInput}
                        placeholder="photo"
                        value={photo}
                        placeholderTextColor="#ababab55"
                        onChangeText={(photo) => setphoto(photo)}
                    />
                </View>
                
                <TouchableOpacity style={styles.loginBtn}   >
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
        backgroundColor: '#fffc',
       
        borderColor:'black',
        borderRadius: 100,
        width: '80%',
        height:'7%',
        marginTop:'60%',
        marginBottom: "4%",
        
    },
    inputView2: {
        backgroundColor: '#fffc',
        borderRadius: 10,
        width: '80%',
        height:'7%',
        marginBottom: '4%',
        
    },
    TextInput: {
        height: 50,
        padding: 10,
        marginLeft: 20,

    },
   
    
    
    loginBtn: {
        width: "80%",
        marginTop: '8%', 
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

