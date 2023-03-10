// Importing necessary libraries and modules
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity, CheckBox } from 'react-native';

// Creating a functional component called ParentTranslationScreen
const ParentTranslationScreen = (props) => {

  // Defining a function to handle button press 
  const handlePress = () => {
    alert("Submitted Text: \"Hola Jennifer. ¿Cómo estás?\"");
  };

  // Rendering the UI of the component
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Message Form/Translator</Text>
      <View style={styles.inputContainer}>
        <TextInput style={[styles.input, styles.reasonInput]} placeholder="Message" multiline={true} numberOfLines={4} />
        <TouchableOpacity style={styles.submitButton} title="Submit" onPress={handlePress}>
          <Text style={styles.submitText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Defining styles for the component using StyleSheet.create
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#26bf84',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20,
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  reasonInput: {
    height: 80,
    textAlignVertical: 'top',
    paddingTop: 10,
    marginBottom: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  submitButton: {
    backgroundColor: 'black',
    width: '80%',
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  submitText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ParentTranslationScreen;