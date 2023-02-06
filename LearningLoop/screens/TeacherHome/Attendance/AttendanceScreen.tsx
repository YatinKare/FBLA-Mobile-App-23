import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../../components/EditScreenInfo';
import { Text, View } from '../../../components/Themed';
import { RootTabScreenProps } from '../../../types';

import styles from '../Attendance/styles';

export default function AttendanceScreen(
  
  //{ navigation }: RootTabScreenProps<'TabOne'>
  
  ) {
  
    return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/AttendanceScreen.tsx" />
    </View>
  );
}

