import { Button } from '@rneui/themed';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

export function HomeScreen() {
  const nav = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Welcome back</Text>
      <Button title="LOG OUT" onPress={() => nav.goBack()} />
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
