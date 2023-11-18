import { Typography } from 'react-native-ui-lib';
import { Colors } from './colors';
import { Colors as RNUILibColors } from 'react-native-ui-lib';

export const configTheme = () => {
  RNUILibColors.loadColors(Colors);

  Typography.loadTypographies({
    title: {
      fontSize: 96,
      fontWeight: 'bold',
      fontFamily: 'Futura',
      color: Colors.cerulean,
    },
    label: {
      fontSize: 64,
      fontFamily: 'Futura Medium BT',
      color: Colors.cerulean,
    },
    input: {
      fontSize: 48,
      fontFamily: 'Futura',
      color: Colors.cerulean,
    },
    bold: {
      fontWeight: 'bold',
    },
    cerulean: {
      color: Colors.cerulean,
    },
    button: {
      color: Colors.white,
      fontFamily: 'Futura',
      fontWeight: 'bold',
      fontSize: 40,
    },
    name: {
      fontSize: 48,
      fontFamily: 'Futura',
      fontWeight: 'bold',
    },
    settings: {
      fontSize: 80,
      fontFamily: 'Futura',
      fontWeight: 'bold',
      color: Colors.cerulean,
    },
    settingOptions: {
      fontSize: 64,
      fontFamily: 'Futura',
      fontWeight: 'bold',
      color: Colors.white,
    },
    select: {
      fontSize: 36,
      fontFamily: 'Futura Medium BT',
      color: Colors.allports,
    },
  });
};
