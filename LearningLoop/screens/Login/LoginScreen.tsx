import { Text, View } from '../../components/Themed';

import React, { useState } from 'react';

import { TextInput, TouchableOpacity } from 'react-native';
import styles from "../Login/styles"

import { useNavigation } from '@react-navigation/native';
interface Props {
  setLoggedInUser: (user: 'teacher' | 'parent') => void;
}

 

function LoginScreen({ setLoggedInUser }: { Props }) {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  /*
  useEffect(() => {
      AsyncStorage.getItem('username').then((username) => {
        if (username) {
          setUsername(username);
        }
      });
      AsyncStorage.getItem('password').then((password) => {
          if (password) {
            setPassword(password);
          }
        });
    }, []);
    */



  const handleLogin = () => {
    if (username === 'teacher' && password === 'teacher') {
      setLoggedInUser('teacher');
      navigation.navigate('Teacher', {name: username});
    } else if (username === 'parent' && password === 'parent') {
      setLoggedInUser('parent');
      navigation.navigate('Parent', {name: username});
    } else {
      // handle invalid login
      console.log("err");
    }
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <>
      <Text style={styles.description}>Welcome to LearningLoop</Text>
      </>
      <TextInput
        style={styles.inputText}
        placeholder="Username"
        placeholderTextColor="white"
        onChangeText={setUsername}
        value={username}
      />
      <TextInput
        style={styles.inputText}
        placeholder="Password"
        placeholderTextColor="white"
        onChangeText={setPassword}
        value={password}
      />
      <>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <>
            <Text>Login</Text>
          </>
        </TouchableOpacity>
      </>
    </View>
  );

}



export { LoginScreen as default }