import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , SafeAreaView} from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../components/Login';
import GetStart from '../components/GetStart';
import GetStart2 from '../components/GetStart2';
import GetStart3 from '../components/GetStart3';
import signup from '../components/signup'
import ForgetPassword from '../components/ForgetPassword';
import Profaile from '../components/Profaile'
import UpdateProfile from '../components/UpdateProfile'
import Home from '../components/Home'
const Stack = createNativeStackNavigator();


const Index = () => {
  return (
    <NavigationContainer>
        <SafeAreaView style={styles.root}>

     <Stack.Navigator >
      <Stack.Screen name="GetStart" component={GetStart} />
      <Stack.Screen name="GetStart2" component={GetStart2} />
      <Stack.Screen name="GetStart3" component={GetStart3} />
      <Stack.Screen name="Login" component={Login} /> 
      <Stack.Screen name="ForgetPassword" component={ ForgetPassword } />
      <Stack.Screen name="signup" component={signup} />
      <Stack.Screen name="Profaile" component={Profaile} /> 
      <Stack.Screen name="UpdateProfile" component={UpdateProfile} />
      <Stack.Screen name="Home" component={Home} />



    </Stack.Navigator>
    </SafeAreaView>
  </NavigationContainer>
  )
}
const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
  
  
  });

export default Index