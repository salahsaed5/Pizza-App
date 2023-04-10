import { View, Text , TextInput,StyleSheet} from 'react-native'
import React from 'react'

export default function Custominput({placeholder}) {
  return (
    <View style = {styles.container}>
      <TextInput  placeholder={placeholder} style = {styles.input}/>
    </View>
  );
};


const styles = StyleSheet.create({
    container:{
    backgroundColor:"#F2F2F2",
    Width:"100%",
    height:50, 
    marginVertical:10,
    paddingHorizontal:10,
    borderColor:"#e8e8e8",
    borderWidth:2,
    borderRadius:999,
    },
    input:{
    height:"100%",
    fontSize:20,
    
    }
    
    
    });
    