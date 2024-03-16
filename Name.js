import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';

const Name = ({ navigation }) => {
  const [name, setName] = useState('');

  const handleNameChange = (text) => {
    setName(text);
  };

  const handleSubmit = ({ name }) => {
    // Handle form submission here
    alert(`Please Enter Your Name, ${name}!`);
  };

  return (
    <ImageBackground source={require('./img/bgsingly.jpg')} style={styles.background} blurRadius={25}
    >
      <View style={styles.container}>
        <Text style={styles.title}>What's your name?</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          onChangeText={handleNameChange}
          value={name}
        />
        </View>
        <View style={styles.button}>
        <TouchableOpacity onPress={() =>navigation.navigate('DateOfBirth')}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
        </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  container: {
    padding: 10,
    // alignItems: 'center',

  },
  title: {
    fontSize: 34,
    marginBottom: 45,
    marginTop: 100,
    color: '#fff',

  },
  input: {
    width: '100%',
    padding: 12,
    marginBottom: 20,
    borderRadius: 5,
    borderColor: '#ccc',
    borderWidth: 2,
    fontSize: 16,
    
  },
  button: {
    backgroundColor: 'red',
    paddingVertical: 12,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 370,
    marginLeft:22,
    width: "90%",

  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },

});

export default Name;