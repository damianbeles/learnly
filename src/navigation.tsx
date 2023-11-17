import { useAuth } from './hooks/useAuth';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from './screens/LoginScreen';
import { ChildrenScreen } from './screens/ChildrenScreen';

const AppStack = createNativeStackNavigator();

export function Navigation() {
  const { isLoggedIn } = useAuth();

  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        {isLoggedIn ? (
          <AppStack.Screen name="ChildrenScreen" component={ChildrenScreen} />
        ) : (
          <AppStack.Screen name="LoginScreen" component={LoginScreen} />
        )}
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
