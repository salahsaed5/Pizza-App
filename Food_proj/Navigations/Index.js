import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , SafeAreaView} from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../components/Login';
import GetStart from '../components/GetStart';
import GetStart2 from '../components/GetStart2';
import GetStart3 from '../components/GetStart3';

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