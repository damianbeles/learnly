import { Button } from '@rneui/themed';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export function MainScreen({ navigation }) {
  const goToHome = () => navigation.navigate('Home');

  return (
    <View style={styles.container}>
      <Button title="LOG IN" onPress={goToHome} />
      <Text>Open up App.js to start working on your app!</Text>
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
