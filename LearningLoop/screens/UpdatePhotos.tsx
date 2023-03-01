import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import data from '../assets/photos';

const UpdatePhotosScreen = () => {
  const [photo, setPhoto] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handlePress = () => {
    const newObject = {
      photo: { uri: photo },
      title: title,
      description: description
    };
    data.push(newObject);
    console.log(data);
  };

  return (
    <View>
      <TextInput
        placeholder="Photo URL"
        value={photo}
        onChangeText={setPhoto}
      />
      <TextInput
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <Button title="Submit" onPress={handlePress} />
    </View>
  );
};

export { data };
export default UpdatePhotosScreen;