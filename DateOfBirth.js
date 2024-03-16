import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet, TextInput } from 'react-native';

const DateOfBirth = ({ navigation }) => {
  const [dob, setDob] = useState('');

  const Gender = ({ DateOfBirth }) => {
    // Handle form submission here
    alert(`Check your date of birth again, as you cannot change your date of birth in your whole life., ${DateOfBirth}!`);
  };

  return (
    <ImageBackground source={require('./img/bgsingly.jpg')} style={styles.background} blurRadius={25}>
      <View style={styles.container}>
        <Text style={styles.title}>What's your Date of Birth?</Text>
        <TextInput
          style={styles.input}
          placeholder="YYYY-MM-DD"
          value={dob}
          onChangeText={setDob}
          keyboardType="numeric"
          maxLength={10}
        />
        </View>
        <View style={styles.button} >
        <TouchableOpacity onPress={() =>
        navigation.navigate('Gender')
      }>
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
  },
  container: {
    padding: 10,
    // alignItems: 'center',
  },
  title: {
    fontSize: 34,
    marginBottom: 20,
    marginTop: 100,
    color: '#fff',
  },
  input: {
    width: '100%',
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 5,
    color: '#fff',
    fontSize: 18,
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

export default DateOfBirth;