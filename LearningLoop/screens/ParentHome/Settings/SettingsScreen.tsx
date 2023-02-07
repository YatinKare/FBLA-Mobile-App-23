import { StyleSheet } from 'react-native';
import EditScreenInfo from '../../../components/EditScreenInfo';
import { Text, View } from '../../../components/Themed';
import { ParentStackScreenProps } from '../../../types';

import { TouchableOpacity } from 'react-native';

import styles from '../Settings/styles';

import { useNavigation } from '@react-navigation/native';

export default function SettingsScreen(
  
  //{ navigation }: RootTabScreenProps<'TabOne'>
  
  ) {
    const navigation = useNavigation();
    return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => {
        navigation.navigate("Login")
        console.log(navigation.getState());
      }
          }>
            <Text>Hallo</Text>
        </TouchableOpacity>
    </View>
  );
}




{/*navigation.navigate("Root", { screen: "Login"})*/}