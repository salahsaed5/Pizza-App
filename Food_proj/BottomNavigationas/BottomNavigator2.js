import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeTwo from '../Screens/HomeTwo';
import Profaile from '../Screens/profaile';
import DetailsScreen from '../Screens/DetailsScreen';




const Tab = createBottomTabNavigator();

const BottomNavigator2 = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                style: {
                    height: 90,
                    borderTopWidth: 0,
                    elevation: 0,
                },
                showLabel: false,
                activeTintColor: '#F9813A',
            }}>

            <Tab.Screen
                name="HomeScreen"
                component={HomeTwo}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="home" color={color} size={28} />
                    ),
                }}
            />
            <Tab.Screen
                name="Details"
                component={DetailsScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="shopping" color={color} size={28} />
                    ),
                }}
            />

            <Tab.Screen
                name="Profaile"
                component={Profaile}
                tabBarLabel='Profaile'
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="account" color={color} size={28} />
                    ),
                }}
            />

        </Tab.Navigator>
    );
};

export default BottomNavigator2;
