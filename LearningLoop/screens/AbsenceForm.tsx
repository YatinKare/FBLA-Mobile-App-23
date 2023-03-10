// Importing necessary components and data from other files

import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity } from 'react-native';
import data from '../assets/absence';

// Defining AbsenceFormScreen functional component
const AbsenceFormScreen = (props) => {
  // Defining handlePress function to handle form submission and add new object to data array
  const handlePress = () => {
    alert("Thank You for Submitting");
    const newObject = {
      name: name,
      reason: reason,
      signature: signature
    };
    data.push(newObject);
    console.log(data);
  };

  // Using useState hook to define state variables for name, reason and signature input fields
  const [name, setName] = useState('');
  const [reason, setReason] = useState('');
  const [signature, setSignature] = useState('');

  // Rendering Absence Form Screen
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Absence Form</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Name of Student" value={name} onChangeText={setName} />
        <TextInput style={[styles.input, styles.reasonInput]} placeholder="Reason of Absence" value={reason} onChangeText={setReason} multiline={true} numberOfLines={4} />
        <TextInput style={styles.input} placeholder="Signature of Gaurdian" value={signature} onChangeText={setSignature} />
        <TouchableOpacity style={styles.submitButton} title="Submit" onPress={handlePress}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Defining styles
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

export default AbsenceFormScreen;