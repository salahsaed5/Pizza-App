import { StatusBar }from 'expo-status-bar';
import React from 'react';
import {Button , StyleSheet , Text  , View ,TextInput, TouchableOpacity,ImageBackground} from 'react-native';
import { SafeAreaView } from 'react-native';
import CustomButton from '../compo/CustomButton';
import Custominput from '../compo/CustomButton';
import ForgotPassword  from '../assets/ForgetPassword.png';
export default function ForgetPassword({ navigation }) {
return(
  
<View style = {styles.container}>
 
<ImageBackground source={ForgotPassword} style={{width: '130%', height: '120%'}}>

</ImageBackground>   
<View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Email"
                        
                        placeholderTextColor="#fffc"
                        
                    />
                      </View>


</View>
);
}

const styles = StyleSheet.create({
container:{
flex:1,
alignItems:'center',
justifyContent:'center',
height:null,
width:null,
},
input:{
  width:'70%',
  height :50,
  marginBottom : 20,   
  borderColor: 'red',
  borderWidth: 2,
  padding: 9,
 },
  title:{
    fontSize :30,
    fontWeight : 'bold',
    marginBottom : 20,
    color:'red',   
  },
  image:{
    width:290,
    height:80,
    alignItems:'center',
    justifyContent:'center',
    marginBottom : 5,   
  },
  inputt:{
marginTop:50,
color:'blue' ,

  },
  input:{
    width:'70%',
    height :30,
    marginBottom : 10,
    margintop : 10,   
    borderColor: 'red',
    borderWidth: 2,
    padding: 9,
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


})