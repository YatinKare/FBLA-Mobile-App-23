import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CalendarScreen from './screens/Calendar';
import PhotosScreen from './screens/Photos';
import UpcomingEventsScreen from './screens/UpcomingEvents';
import UpdatePhotosScreen from './screens/UpdatePhotos';

export default function App() {
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
