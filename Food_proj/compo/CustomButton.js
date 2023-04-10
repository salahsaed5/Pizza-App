import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const CustomButton = ({ text, type = "Button", bgColor, txtColor }) => {
    return (
        <TouchableOpacity style={[styles.container, styles[`container${type}`], bgColor ? { backgroundColor: bgColor } : {}]}>
            <Text style={[styles.text, styles[`text${type}`], txtColor ? { color: txtColor } : {}]}>{text}</Text>

        </TouchableOpacity>

    );
};

const styles = StyleSheet.create({
    container: {

        padding: 10,
        marginVertical: -80,
        alignItems: "center",
        backgroundColor: "green",
        borderRadius: 17,
        width: '30%',
        paddingHorizontal: 15,
        marginLeft: 205,
        top: 30,
        
    },
    containerLink: {
        backgroundColor: "gray",
        padding: 10,
        marginVertical: -80,
        alignItems: "center",
        borderRadius: 17,
        width: '30%',
        paddingHorizontal: 15,
        marginLeft: 210,
        top: 400,
        
    },
    text: {
        fontWeight: "bold",
        fontSize: 20,
        Color: "black",
    },
    textLink: {
        Color: "#3A3967",
        fontSize: 15,
    },


});


export default CustomButton