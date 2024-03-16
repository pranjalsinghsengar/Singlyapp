import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from 'react-native';

const Gender = ({navigation}) => {
  const [selectedOption, setSelectedOption] = useState({
    male: false,
    female: false,
    others: false,
  });

  const handleOptionSelect = option => {
    setSelectedOption({...selectedOption, [option]: !selectedOption[option]});
  };

  const handleSubmit = () => {
    // Handle form submission here
    const selectedGender = Object.keys(selectedOption).find(
      key => selectedOption[key],
    );
    if (selectedGender) {
      alert(`Your selected gender is: ${selectedGender}`);
    } else {
      alert('Please select a gender');
    }
  };

  return (
    <ImageBackground
      source={require('./img/bgsingly.jpg')}
      style={styles.background}
      blurRadius={25}>
      <View style={styles.container}>
        <Text style={styles.title}>Select Your Gender</Text>
        <View style={styles.optionsContainer}>
          {Object.keys(selectedOption).map(option => (
            <TouchableOpacity
              key={option}
              style={[
                styles.optionButton,
                selectedOption[option] && styles.selectedOption,
              ]}
              onPress={() => handleOptionSelect(option)}>
              <Text style={styles.optionButtonText}>
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Passion')}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>
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
    padding: 20,
    borderRadius: 10,
    // alignItems: 'center',
  },
  title: {
    fontSize: 34,
    marginBottom: 10,
    marginTop: 50,
    marginBottom: 100,
    color: '#fff',
  },
  optionsContainer: {
    marginBottom: 250,
  },
  optionButton: {
    background: 'Transparent',
    borderColor: '#FF4F4F',
    borderWidth: 1,
    height: 50,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 25,
    marginBottom: 15,
    marginLeft: 14,
    width: '90%',
  },
  selectedOption: {
    backgroundColor: '#FF4F4F',
  },
  optionButtonText: {
    color: '#fff',
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 120,
    // marginTop: 5,
  },
  buttonContainer: {
    marginTop: 25,
    marginLeft: 20,
    width: '90%',
  },
  button: {
    backgroundColor: '#FF4F4F',
    paddingVertical: 12,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
});

export default Gender;
