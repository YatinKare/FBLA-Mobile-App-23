// Import necessary modules and components
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

import CalendarScreen from './screens/Calendar';
import PhotosScreen from './screens/Photos';
import UpcomingEventsScreen from './screens/UpcomingEvents';
import UpdatePhotosScreen from './screens/UpdatePhotos';
import AbsenceFormScreen from './screens/AbsenceForm';
import AbsenceScreen from './screens/Absence';
import ParentTranslationScreen from './screens/ParentTranslation';
import TeacherTranslationScreen from './screens/TeacherTranslation';
import CalendarNewScreen from './screens/CalendarNew';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './screens/Login';

// Create navigation stacks and tabs
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Define the teacher navigation tabs
function TeacherTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="UpdatePhotos" component={UpdatePhotosScreen} />
      <Tab.Screen name="Absence" component={AbsenceScreen} />
      <Tab.Screen name="Messages" component={TeacherTranslationScreen} />
    </Tab.Navigator>
  );
}

// Define the parent navigation tabs
function ParentTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Photos" component={PhotosScreen} />
      <Tab.Screen name="Calendar" component={CalendarScreen} />
      <Tab.Screen name="better" component={CalendarNewScreen} />
      <Tab.Screen name="UpcomingEvents" component={UpcomingEventsScreen} />
      <Tab.Screen name="Absence Form" component={AbsenceFormScreen} />
      <Tab.Screen name="Contact" component={ParentTranslationScreen} />
    </Tab.Navigator>
  );
}

// Main app component
export default function App() {
  // Define the type of user as either teacher or parent
  type UserType = 'teacher' | 'parent';
  const [userType, setUserType] = useState<UserType>();
  // Handle the login functionality
  const handleLogin = () => {
    setUserType(selectedUserType);
  };

  // Render the appropriate navigation depending on user type
  return (
  <NavigationContainer>
      {userType ? (
        userType === 'teacher' ? (
          <TeacherTabNavigator />
        ) : (
          <ParentTabNavigator />
        )
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="Login" options={{ headerShown: false }}>
            {() => <LoginScreen setUserType={setUserType} onLogin={handleLogin} />}
          </Stack.Screen>
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

// Define styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
