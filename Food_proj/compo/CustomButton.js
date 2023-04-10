import { View, Text ,TouchableOpacity , StyleSheet} from 'react-native'
import React from 'react'

const CustomButton = ({text , type = "Button",bgColor,txtColor}) => {
  return (
    <TouchableOpacity style = {[styles.container,styles[`container${type}`],bgColor?{backgroundColor:bgColor}:{}]}>
<Text style = {[styles.text,styles[`text${type}`],txtColor?{color:txtColor}:{}]}>{text}</Text>

    </TouchableOpacity>

    );
};

const styles = StyleSheet.create({
container:{
Width:"100%",
padding:15,
marginVertical:5,
alignItems:"center",
backgroundColor:"black",
top:20, 
},
containerLink:{
 backgroundColor:"white",
},
text:{
fontWeight:"bold",
fontSize:20,
color:"white",
},

textLink:{
    Color:"#3A3967",
    fontSize: 15,
   },


});


export default CustomButton