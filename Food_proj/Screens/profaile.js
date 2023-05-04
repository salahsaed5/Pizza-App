import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, ImageBackground, TouchableOpacity, useWindowDimensions, Image } from 'react-native';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signOut } from "firebase/auth";
import { auth, provider, db } from "../firebase/firebase";
import * as ImagePicker from 'expo-image-picker';
import { collection, addDoc, and, onSnapshot } from "firebase/firestore";
import { doc, setDoc, getDoc, updateDoc, deleteDoc, getDocs } from "firebase/firestore";
import Icon from 'react-native-vector-icons/MaterialIcons';


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

          <Image source={{ uri: user.photo }} style={styles.iimger} />
          <Text style={styles.loginText4}>{user.firstname}{user.lastname}</Text>


          <View style={styles.loginText3}>
            <Text>{user.email}</Text>

          </View>
          <View style={styles.Phone}>
            <Text>{user.phone}</Text>

          </View>
          <View style={styles.Birhdate}>
            <Text>{user.birthdate}</Text>

          </View>
        </View>


      ))}


      <View style={styles.loginBtn}>
        <TouchableOpacity onPress={handelsignout} >
          <Text style={[styles.loginText2, { color: "#ED7014" }]}>SignOut</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.btnn}>
        <TouchableOpacity onPress={handelUpdate} >
          <Text style={[styles.loginText22, { color: "#ED7014" }]}> Edit </Text>
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
  },


  loginBtn: {
    // width: "25%",
    marginTop: '-65%',
    marginBottom: '8%',
    marginRight: "78%",
    borderRadius: 10,
    height: '5%',
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "#ED7014",
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
    marginBottom: "3%",
    justifyContent: "center",
    marginLeft: "11%",
    color: 'black',
    alignItems: "center",

    fontWeight: 'bold',
    fontSize: 2,

  },

  loginText2: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17
  },

  loginText22: {
    fontWeight: 'bold',
    fontSize: 17
  },
  loginText3: {
    marginTop: "2%",
    marginLeft: "5%",
    color: 'gray',
    fontWeight: 'bold',
    fontSize: 15,

  },
  loginText4: {
    marginTop: "2%",
    marginLeft: "11%",
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,

  },

  iimger: {
    borderRadius: 1000,
    height: 120,
    width: 120,
    marginLeft: "8%",
    marginTop: "4%",

  },
  btnn: {

    marginLeft: "80%",
    marginVertical: "2%",
    marginTop: "-15%",


  },
  Phone: {
    marginTop: "4%",
    marginLeft: "13%",
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,

  },
  Birhdate: {
    marginTop: "5%",
    marginLeft: "15%",
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,

  },

});