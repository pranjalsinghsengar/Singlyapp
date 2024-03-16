import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleContinue = ({ navigation }) => {
    // Perform validation and continue lic hereog
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
  };

  return (
    <ImageBackground
      source={require('./img/bgsingly.jpg')}
      style={styles.background}
      blurRadius={25}
    >
      <View>
        <Text style={styles.title}>My Email and Password</Text>
        </View>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#ccc"
          value={email}
          onChangeText={setEmail}
          underlineColorAndroid="transparent"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#ccc"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
          underlineColorAndroid="transparent"
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#ccc"
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          underlineColorAndroid="transparent"
        />
      </View>
      <View>
        <TouchableOpacity style={styles.button} onPress={() =>navigation.navigate('Name')}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
        </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    // justifyContent: 'center',
    marginTop: 160,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    paddingHorizontal: 20,
    marginTop:80,
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 5,
    height: 50,
    marginBottom: 10,
    borderBottomWidth: 1,
    paddingHorizontal: 10,
    backgroundColor: 'transparent',
    color: '#000', // Change the color of the text you type
    borderWidth: 1,
    borderColor: '#ccc',
  },
  button: {
    backgroundColor: 'red',
    paddingVertical: 12,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:15,
    marginLeft:22,
    width: "90%",

  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
});

export default SignIn;