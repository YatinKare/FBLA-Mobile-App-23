import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CalendarScreen from './screens/Calendar';
import PhotosScreen from './screens/Photos';
import UpcomingEventsScreen from './screens/UpcomingEvents';
import UpdatePhotosScreen from './screens/UpdatePhotos';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TeacherTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="UpdatePhotos" component={UpdatePhotosScreen} />
    </Tab.Navigator>
  );
}

function ParentTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Calendar" component={CalendarScreen} />
      <Tab.Screen name="Photos" component={PhotosScreen} />
      <Tab.Screen name="UpcomingEvents" component={UpcomingEventsScreen} />
    </Tab.Navigator>
  );
}

export default function App() {


  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Parent">
      <Stack.Screen name="Teacher" component={TeacherTabNavigator} />
      <Stack.Screen name="Parent" component={ParentTabNavigator} />
    </Stack.Navigator>
  </NavigationContainer>
  );

  return (
    <UpdatePhotosScreen />
  );


  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <View>
        <Text>Calendar</Text>
        <Text>Home</Text>
        <Text>Settings</Text>
        <Text>Translator</Text>
        <Text>UpcomingEvents</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
