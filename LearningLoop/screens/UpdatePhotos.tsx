
// Import necessary components and data
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity } from 'react-native';
import data from '../assets/photos';

// Define the UpdatePhotosScreen component
const UpdatePhotosScreen = () => {
  // Define states for the form inputs
  const [photo, setPhoto] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // Handle submit button press
  const handlePress = () => {
    alert("You have submitted a photo");
    const newObject = {
      photo: { uri: photo },
      title: title,
      description: description
    };
    // Push the new object into the data array
    data.push(newObject);
  };

  // Render the UpdatePhotosScreen component
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upload your photos!</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Photo URL" value={photo} onChangeText={setPhoto} />
        <TextInput style={styles.input} placeholder="Title" value={title} onChangeText={setTitle} />
        <TextInput style={[styles.input, styles.descriptionInput]} placeholder="Description" value={description} onChangeText={setDescription} multiline={true} numberOfLines={4} />
        <TouchableOpacity style={styles.submitButton} title="Submit" onPress={handlePress}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Define styles for the UpdatePhotosScreen component
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
  descriptionInput: {
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

// Export the data array and the UpdatePhotosScreen component as default
export { data };
export default UpdatePhotosScreen;