import { Text, View } from '../../components/Themed';
import { RootTabScreenProps } from '../../types';

import React, { useState } from 'react';

import { Button, TextInput } from 'react-native';
import styles from "../Login/styles"


let home: boolean = true;



const onPressLogin = () => {
    home = false;
}



function LoginScreen(

    ) {
        const [state, setState] = useState({
            user: '',
            pass: ''
        });
  
        return (
        <View style={styles.container}>
          <Text style={styles.title}>Login</Text>
          <View style={styles.inputView}>
            <TextInput 
            style={styles.inputText}
            placeholder="Username"
            placeholderTextColor="#003f5c"
            onChangeText={text => setState({user:text, pass:state.pass})}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput 
            style={styles.inputText}
            placeholder="Password"
            placeholderTextColor="#003f5c"
            onChangeText={text => setState({user:state.user, pass:text})}
            />
          </View>
          <button onClick={onPressLogin}>
            LOGIN
          </button>

        </View>
      );

        }

export {home, LoginScreen as default}