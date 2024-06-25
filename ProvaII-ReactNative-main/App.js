import { StyleSheet, View } from 'react-native';
import { Insert } from './banco/Insert';
import { Update } from '.banco/Update';
import { Remove } from './banco/Remove';
import { AllContacts } from './banco/AllContacts';

export default function App() {

  return (
    <View style={styles.container}>
      <Insert/>
      <Update/>
      <Remove/>
      <AllContacts/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
