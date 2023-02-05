import { Text, View } from '../../components/Themed';
import { RootTabScreenProps } from '../../types';

import React, { useState } from 'react';
import { useContext, createContext, useEffect  } from 'react';

import { Button, TextInput } from 'react-native';
import styles from "../Login/styles"

import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationProp } from '@react-navigation/core';

//let home: boolean = true;

type Props = {
    navigation: NavigationProp<Record<string, object | undefined>, string, any, any>;
  };

export const UserContext = createContext({
    username: '',
    password: '',
    setUsername: (username: string) => {},
    setPassword: (password: string) => {},
});

function LoginScreen({navigation}: Props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
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



    const handleLogin = async () => {
        try {
          await AsyncStorage.setItem('username', username);
          await AsyncStorage.setItem('password', password);
          console.log(username);
          navigation.navigate('Root');
        } catch (error) {
          console.log(error);
        }
      };
    

        return (
            <UserContext.Provider value={{ username, password, setUsername, setPassword }}>
                <View style={styles.container}>
                <Text style={styles.title}>Login</Text>
                <View style={styles.inputView}>
                    <TextInput 
                    style={styles.inputText}
                    placeholder="Username"
                    placeholderTextColor="#003f5c"
                    onChangeText={(text) => setUsername(text)}
                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput 
                    style={styles.inputText}
                    placeholder="Password"
                    placeholderTextColor="#003f5c"
                    onChangeText={(text) => setPassword(text)}
                    />
                </View>
                <Button title="Login" onPress={handleLogin} />
                </View>
            </UserContext.Provider>
    );

}



export {LoginScreen as default}