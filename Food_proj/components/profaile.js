import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, ImageBackground, TouchableOpacity, useWindowDimensions, Image } from 'react-native';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signOut } from "firebase/auth";
import { auth, provider, db } from "../firebase/firebase";
import * as ImagePicker from 'expo-image-picker';
import { collection, addDoc, and, onSnapshot } from "firebase/firestore";
import { doc, setDoc, getDoc, updateDoc, deleteDoc, getDocs } from "firebase/firestore";

export default function Profaile({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setName] = useState('');
  const [lastname, setlastName] = useState('');
  const [phone, setphone] = useState('');
  const [birthdate, setbrithdate] = useState('');
  const [photo, setphoto] = useState(null);
  const [users, setusers] = useState([]);
  const image = require("../assets/profile.png");
  const handelsignout = () => {



    signOut(auth).then(() => {
      navigation.navigate("Login")
    }).catch((error) => {
      // An error happened.
    });

  }

  //find data
  const findData = async () => {
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
    //location.reload()
  }
  useEffect(() => {
    findData();
  }, []);
  const handelUpdate = () => {
    navigation.navigate("UpdateProfile")
  }

  return (
    
    <View style={styles.container}>
        {users.map((user) => (
         
          <View key={user.birthdate}>
            <Text style={styles.loginText}>Profile</Text>

            <Image source={{ uri: user.photo }} style={styles.iimger} />
            <Text style={styles.loginText4}>{user.firstname}{user.lastname}</Text>
            <Text style={styles.loginText3}>{user.email}</Text>
            
          </View>

        ))}



        <TouchableOpacity style={styles.loginBtn} onPress={handelsignout} >
          <Text style={styles.loginText2}>logout</Text>
        </TouchableOpacity>
        <View style={styles.btnn}>
        <TouchableOpacity  onPress={handelUpdate} >
          <Text style={[styles.loginText22, { color: "#ED7014" }]}> Edit </Text>
        </TouchableOpacity></View>


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
    marginTop: '50%',
    marginBottom: '8%',
    marginLeft: "4%",
    borderRadius: 10,
    height: '5%',
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ED7014",
  },

  loginBtn2: {
    width: "80%",
    marginTop: "12%",
    marginBottom: "10%",
    marginLeft: "4%",
    borderRadius: 10,
    height: '5%',
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ED7014",
  },


  loginText: {
    marginTop: "2%",
    marginLeft: "18%",
    color: 'black',
    fontWeight: 'bold',
    fontSize: 25,

  },

  loginText2: {
    color: 'white',
    fontWeight: 'bold',
  },
  
  loginText22: {
    color: 'white',
    fontWeight: 'bold',
  },
  loginText3: {
    marginTop: "1%",
    marginLeft: "6%",
    color: 'gray',
    fontWeight: 'bold',
    fontSize: 15,

  },
  loginText4: {
    marginTop: "2%",
    marginLeft: "20%",
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,

  },

  iimger: {
    borderRadius: 120,
    height: 115,
    width: 115,
    marginLeft: "14%",
    marginTop: "4%",

  },
  btnn: {
    marginLeft: "88%",
    marginVertical: "2%",
    marginTop: "-116%",

  },

});