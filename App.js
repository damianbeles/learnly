import { setDefaultAxiosHeaders } from './src/constants/axios';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Navigation } from './src/navigation';
import { AuthProvider } from './src/contexts/auth';

import * as SplashScreen from 'expo-splash-screen';
import { WithFonts } from './src/wrappers/WithFonts';
import { View } from 'react-native';

import './src/constants/fontawesome';
import { Typography } from 'react-native-ui-lib';
import { configTheme } from './src/constants/theming';
import { WithProgrammaticalyLogin } from './src/wrappers/WithProgrammaticalyLogin';

SplashScreen.preventAutoHideAsync();

setDefaultAxiosHeaders();

configTheme();

export default function App() {
  return (
    <SafeAreaProvider>
      <WithFonts>
        <AuthProvider>
          <WithProgrammaticalyLogin>
            <View style={{ flex: 1 }} onLayout={SplashScreen.hideAsync}>
              <Navigation />
            </View>
          </WithProgrammaticalyLogin>
        </AuthProvider>
      </WithFonts>
    </SafeAreaProvider>
  );
}
