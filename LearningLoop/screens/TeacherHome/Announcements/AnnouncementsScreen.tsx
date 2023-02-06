import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../../components/EditScreenInfo';
import { Text, View } from '../../../components/Themed';
import { RootTabScreenProps } from '../../../types';

import styles from '../Announcements/styles';

export default function AnnouncementsScreen(
  
  //{ navigation }: RootTabScreenProps<'TabOne'>
  
  ) {
  
    return (
    <View style={styles.container}>
      <Text style={styles.title}>hello world</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/AnnouncementsScreen.tsx" />
    </View>
  );
}

