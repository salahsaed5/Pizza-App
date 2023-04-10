import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

export default function Custominput({ placeholder ,value,setValue,secureTextEntry}) {
    return (
        <View style={styles.inputView}>
            <TextInput placeholder={placeholder} placeholderTextColor="gray" style={styles.TextInput} value={value} onChangeText={setValue} secureTextEntry={secureTextEntry}/>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F2F2F2",
        Width: "100%",
        height: 50,
        marginVertical: 10,
        paddingHorizontal: 10,
        borderColor: "#e8e8e8",
        borderWidth: 2,
        borderRadius: 999,
    },
    input: {
        height: "100%",
        fontSize: 20,

    },

  inputView: {
        backgroundColor: '#F3F3F3',
        borderRadius: 17,
        width: '70%',
        height: 45,
        marginTop: 100,
        marginBottom: 700,
        marginLeft: 87,
        paddingHorizontal: 10,
        alignItems: 'flex-start',
    },
    TextInput: {
        height: 50,
        padding: 10,
        marginLeft: 20,
        marginBottom: 10,
        fontSize: 20,

    },

});
