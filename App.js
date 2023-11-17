import { MainScreen } from './src/screens/MainScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './src/screens/HomeScreen';

const AppStack = createNativeStackNavigator();

export default function App() {
  const isLogged = false;

  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        {!isLogged ? (
          <AppStack.Screen name="Main" component={MainScreen} />
        ) : (
          <AppStack.Screen name="Home" component={HomeScreen} />
        )}
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
