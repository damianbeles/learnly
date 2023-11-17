import { setDefaultAxiosHeaders } from './src/constants/axios';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Navigation } from './src/navigation';
import { AuthProvider } from './src/contexts/auth';

import * as SplashScreen from 'expo-splash-screen';
import { WithFonts } from './src/wrappers/WithFonts';
import { View } from 'react-native';
import { WithTheming } from './src/wrappers/WithTheming';

import './src/constants/fontawesome';

SplashScreen.preventAutoHideAsync();

setDefaultAxiosHeaders();

export default function App() {
  return (
    <SafeAreaProvider>
      <WithFonts>
        <WithTheming>
          <AuthProvider>
            <View style={{ flex: 1 }} onLayout={SplashScreen.hideAsync}>
              <Navigation />
            </View>
          </AuthProvider>
        </WithTheming>
      </WithFonts>
    </SafeAreaProvider>
  );
}
