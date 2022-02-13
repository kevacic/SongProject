import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert} from 'react-native';

const App = () => {
  return (
      <View style={styles.container}>
        <Text style={styles.big}>Hello, Dr. Song!</Text>
        <StatusBar style="auto" />
        <Button
         title="Click Here"
         onPress={() => Alert.alert("Hello again!")}>
        </Button>
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

  big: {
    fontSize: 30
  }
});

export default App;