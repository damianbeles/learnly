import { useFonts } from 'expo-font';

export function WithFonts({ children }) {
  const [isDone] = useFonts({
    Futura: require('../../assets/fonts/Futura.ttf'),
    'Futura Book Font': require('../../assets/fonts/FuturaBookFont.ttf'),
    'Futura Medium BT': require('../../assets/fonts/FuturaMediumBT.ttf'),
  });

  return isDone && <>{children}</>;
}
