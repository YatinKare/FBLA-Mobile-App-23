import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { RootTabScreenProps } from '../../types';

import styles from "../Calendar/styles"

export default function CalendarScreen(
  
  { navigation }: RootTabScreenProps<'Calendar'>
  
  ) {
  
    return (
    <View style={styles.container}>
      <Text style={styles.title}>Calendar</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/CalendarScreen.tsx" />
    </View>
  );
}


