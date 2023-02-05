import { Text, View } from '../../components/Themed';
import { RootTabScreenProps } from '../../types';

import styles from "../Login/styles"

export default function LoginScreen(
    { navigation }: RootTabScreenProps<'Login'>

    ) {
  
        return (
        <View style={styles.container}>
          <Text style={styles.title}>Login</Text>
          <View style={styles.inputView}>


          </View>

        </View>
      );

        }