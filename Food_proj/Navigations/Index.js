import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Screens/Login';
import GetStart from '../Screens/GetStart';
import GetStart2 from '../Screens/GetStart2';
import GetStart3 from '../Screens/GetStart3';
import signup from '../Screens/signup'
import ForgetPassword from '../Screens/ForgetPassword';
import Profaile from '../Screens/profaile';
import Home from '../Screens/Home';
import UpdateProfile from '../Screens/UpdateProfile';
import Admin from '../Screens/Admin';
import BottomNavigator from '../BottomNavigationas/BottomNavigator';

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
          <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
          <Stack.Screen name="signup" component={signup} />
          <Stack.Screen name="Profaile" component={Profaile} />
          <Stack.Screen name="Home" component={BottomNavigator} />
          <Stack.Screen name="UpdateProfile" component={UpdateProfile} />
          <Stack.Screen name="Admin" component={Admin} />
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