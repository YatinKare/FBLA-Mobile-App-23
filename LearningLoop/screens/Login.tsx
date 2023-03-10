import React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Linking, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

type Props = {
    setUserType: React.Dispatch<React.SetStateAction<string>>;
  };
  
  const LoginScreen: React.FC<Props> = ({ setUserType }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [selectedUserType, setSelectedUserType] = useState("teacher");
  
    const handleSubmit = () => {
  console.log("User type:", selectedUserType);
  console.log("Email:", email);
  console.log("Password:", password);

        
      if (email === "teacher@example.com" && password === "teacher123" /*&& selectedUserType === "teacher"*/) {
        setUserType("teacher");
      } else if (email === "parent@example.com" && password === "parent123"/* && selectedUserType === "parent"*/) {
        setUserType("parent");
      } else {
        alert("Invalid credentials");
      }
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Learning Loop</Text>
        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Login</Text>
          <View style={styles.inputContainer}>
            {/*<Text style={styles.label}>User Type</Text>
            <TextInput
              style={styles.input}
              id="user-type"
              name="user-type"
              value={selectedUserType}
              onChangeText={(value) => setSelectedUserType(value)}
            />
  */}
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              id="email"
              type="email"
              name="email"
              onChangeText={(value) => setEmail(value)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              id="password"
              type="password"
              name="password"
              secureTextEntry={true}
              onChangeText={(value) => setPassword(value)}
            />
          </View>
          <Button
            id="login-button"
            title="Login"
            onPress={handleSubmit} // Set the onPress prop to the handleSubmit function
          />
        </View>
          <Text style={styles.socialsText}>Follow us on our Socials @LearningLoop!</Text>
        <View style={styles.socials}>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com')}>
          <Ionicons name="logo-instagram" size={32} color="black" style={{ marginHorizontal: 10 }} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com')}>
          <Ionicons name="logo-facebook" size={32} color="black" style={{ marginHorizontal: 10 }} />
        </TouchableOpacity>

        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#26bf84",
      alignItems: "center",
      justifyContent: "center",
    },
    logo: {
      fontSize: 48,
      marginBottom: 32,
      color: "white",
    },
    loginContainer: {
      width: "80%",
    },
    loginText: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 16,
      color: "white",
    },
    inputContainer: {
      marginBottom: 16,
    },
    label: {
      marginBottom: 8,
      fontWeight: "bold",
      color: "white",
    },
    input: {
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 5,
      paddingHorizontal: 16,
      paddingVertical: 8,
      color: "white",
    },
    socials: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      paddingVertical: 16,
      paddingHorizontal: 16,
      color: "white",
        },
        socialsText: {
          marginTop: 20,
          fontSize: 24,
          fontWeight: "bold",
          color: "white",
        },
  });

export default LoginScreen;