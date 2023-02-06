import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../../components/EditScreenInfo';
import { Text, View } from '../../../components/Themed';
import { ParentStackScreenProps } from '../../../types';

import styles from '../Photos/styles';

export default function PhotoScreen(
  
  //{ navigation }: RootTabScreenProps<'TabOne'>
  
  ) {
  
    return (
    <View style={styles.container}>
      <Text style={styles.title}>hello world</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/PhotoScreen.tsx" />
    </View>
  );
}

