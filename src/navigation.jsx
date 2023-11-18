import { useAuth } from './hooks/useAuth';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from './screens/LoginScreen';
import { ChildrenScreen } from './screens/ChildrenScreen';
import { HomeScreen } from './screens/HomeScreen';
import { SettingsScreen } from './screens/SettingsScreen';
import { QuizScreen } from './screens/QuizScreen';
import { CongratsScreen } from './screens/CongratsScreen';

const AppStack = createNativeStackNavigator();

export function Navigation() {
  const { isLoggedIn } = useAuth();

  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        {isLoggedIn ? (
          <>
            <AppStack.Screen name="ChildrenScreen" component={ChildrenScreen} />
            <AppStack.Screen name="HomeScreen" component={HomeScreen} />
            <AppStack.Screen name="QuizScreen" component={QuizScreen} />
            <AppStack.Screen name="CongratsScreen" component={CongratsScreen} />
            <AppStack.Screen name="SettingsScreen" component={SettingsScreen} />
          </>
        ) : (
          <AppStack.Screen name="LoginScreen" component={LoginScreen} />
        )}
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
