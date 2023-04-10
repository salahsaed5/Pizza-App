import React, { useEffect, useState } from "react";
import { Text, StyleSheet, View, TextInput, Pressable } from "react-native";

import { auth } from "../../firebase";

const SignupScreen = ({ navigation }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate("Home");
      }
    });
    return unsubscribe;
  }, []);

  // To check if the password === confirm Passowrd
  const validatePassword = () => {
    let isValid = true;
    if (password !== "" && confirmPassword !== "") {
      if (password !== confirmPassword) {
        isValid = false;
        alert("Passwords does not match");
      }
    }
    return isValid;
  };

  // Handling signup so we pass it to Sign up Button
  const handleSignUp = () => {
    if (validatePassword()) {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((userCredentials) => {
          const user = userCredentials.user;
          console.log("Registered with:", user.email);
        })
        .catch((error) => alert(error.message));
    }
  };

  return (
    <View style={styles.outerView}>
      
      <View style={{ paddingBottom: 30 }}>
        
        <Text>Create Your Account,</Text>
        <Text>Sign up to get started</Text>
      </View>

      <Text>
        Email
      </Text>
      <TextInput
        placeholder="Enter an Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Text>
        Password
      </Text>

      <TextInput
        placeholder="Enter a Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
      />

      
      <Text>
        Confirm Password
      </Text>

      <TextInput
        placeholder="Confirm The Password"
        value={confirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
      />

      <Pressable onPress={handleSignUp}>
        <Text style={styles.textBtn}>Sign up</Text>
      </Pressable>

      
      <View style={styles.row}>
        <Text>Already has an account?</Text>
        <Pressable
          style={{ paddingLeft: 5 }}
          onPress={() => navigation.navigate("Login")}
        >
          
          <Text>
            Log in
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create();
export default SignupScreen;