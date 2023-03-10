// Importing necessary components and libraries
import React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Linking, TouchableOpacity, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

// Defining the Props interface that has setUserType function
type Props = {
  setUserType: React.Dispatch<React.SetStateAction<string>>;
};

// Defining a LoginScreen component that receives setUserType as a prop
const LoginScreen: React.FC<Props> = ({ setUserType }) => {
  // Initializing email, password and selectedUserType states with useState hook
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedUserType, setSelectedUserType] = useState("teacher");

  // Function that handles form submission
  const handleSubmit = () => {
    console.log("User type:", selectedUserType);
    console.log("Email:", email);
    console.log("Password:", password);

    // Function that handles form submission
    if (email === "teacher@example.com" && password === "teacher123" /*&& selectedUserType === "teacher"*/) {
      setUserType("teacher");
    } else if (email === "parent@example.com" && password === "parent123"/* && selectedUserType === "parent"*/) {
      setUserType("parent");
    } else {
      alert("Invalid credentials");
    }
  };
  // Defining the layout of the component
  return (
    <View style={styles.container}>
        <Image style={styles.logoImage} source={{uri: 'https://media.discordapp.net/attachments/1065366932469055529/1083860001266880664/Learning_Loop_LOGO.png',}}/>
      <Text style={styles.logo}>Learning Loop</Text>
      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Login</Text>
        <View style={styles.inputContainer}>
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

// Defining the styles for the login screen using StyleSheet.create()
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#26bf84",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    fontSize: 48,
    marginBottom: 8,
    color: "white",
  },
  logoImage: {
    width: 100,
    height: 100,
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