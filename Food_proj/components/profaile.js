import React, { useState,useEffect } from "react";
import { StyleSheet, Text, View, TextInput, ImageBackground, TouchableOpacity, useWindowDimensions,Image } from 'react-native';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signOut } from "firebase/auth";
import {auth , provider,db } from "../firebase/firebase";
import * as ImagePicker from 'expo-image-picker';
import { collection, addDoc,and, onSnapshot} from "firebase/firestore";  
import { doc, setDoc,getDoc,updateDoc,deleteDoc,getDocs} from "firebase/firestore"; 

export default function Profaile({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setName] = useState('');
    const [lastname, setlastName] = useState('');
    const [phone, setphone] = useState('');
    const [birthdate, setbrithdate] = useState('');
    const [photo, setphoto] = useState(null);
    const[users,setusers] = useState([]);
    const image = require("../assets/Myprofile without Buttons.png");
    const handelsignout =() => {
  


        signOut(auth).then(() => {
          navigation.navigate("Login")
        }).catch((error) => {
          // An error happened.
        });
            
          }

          //find data
      const findData=async () => {
        const docRef = doc(db, "users", auth.currentUser.uid);
  const docSnap = await getDoc(docRef);
  let data = [];
  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    data.push({
        ...docSnap.data()
      });
      setusers(data)
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }
      }
      useEffect(() => {
        findData();
      },[]);
    const  handelUpdate=() => {
      navigation.navigate("UpdateProfile")
      }

return(
    <View style={styles.container}>
    <ImageBackground source={image} style={styles.Background}>
    {users.map((user) => (
      <View  key={user.birthdate}>
        <Text>{user.firstname}</Text>
        <Text>{user.lastname}</Text>
        <Text>{user.birthdate}</Text>
        <Text>{user.phone}</Text>
        <Image source={{ uri:user.photo }} style={styles.iimger} />
        
      </View>
      
    ))}
        <TouchableOpacity style={styles.loginBtn} onPress={handelsignout} >
                            <Text style={styles.loginText2}>logout</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} onPress={handelUpdate} >
                            <Text style={styles.loginText2}>UpdateProfile</Text>
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
    iimger: {
      borderRadius:100,
      height:100,
      width:100,

  },
});