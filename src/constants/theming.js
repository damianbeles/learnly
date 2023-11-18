import { Typography } from 'react-native-ui-lib';
import { Colors } from './colors';

export const configTheme = () => {
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
  });
};
