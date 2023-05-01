import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Home from '../Screens/Home';
import Profaile from '../Screens/profaile';



const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                style: {
                    height: 55,
                    borderTopWidth: 0,
                    elevation: 0,
                },
                showLabel: false,
                activeTintColor: '#F9813A',
            }}>

            <Tab.Screen
                name="HomeScreen"
                component={Home}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="home-filled" color={color} size={28} />
                    ),
                }}
            />


            <Tab.Screen
                name="Profaile"
                component={Profaile}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="Profaile" color={color} size={28} />
                    ),
                }}
            />

        </Tab.Navigator>
    );
};

export default BottomNavigator;
