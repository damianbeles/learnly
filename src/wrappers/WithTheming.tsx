import { createTheme, ThemeProvider } from '@rneui/themed';
import { Colors } from '../constants/colors';

const theme = createTheme({
  components: {
    Text: ({ title, label, name }) => ({
      style: {
        fontFamily: label ? 'Futura Medium BT' : 'Futura',
        color:
          title || label ? Colors.cerulean : name ? Colors.black : Colors.white,
        fontSize: title ? 96 : label ? 64 : name ? 48 : 24,
        fontWeight: title || name ? 'bold' : 'normal',
      },
    }),
    Input: {
      containerStyle: {
        width: 450,
      },
      style: {
        fontSize: 48,
        color: Colors.cerulean,
        borderWidth: 4,
        borderRadius: 99,
        borderColor: Colors.cerulean,
        padding: 10,
        paddingHorizontal: 24,
      },
      inputContainerStyle: {
        borderBottomWidth: 0,
      },
    },
    Avatar: {
      size: 156,
      containerStyle: {
        borderWidth: 4,
        borderColor: Colors.cerulean,
      },
    },
    Button: {
      buttonStyle: {
        paddingVertical: 20,
        paddingHorizontal: 28,
        borderRadius: 28,
        borderColor: Colors.allports,
        backgroundColor: Colors.cerulean,
        borderWidth: 8,
      },
      titleStyle: {
        fontFamily: 'Futura',
        fontWeight: 'bold',
        fontSize: 40,
        marginRight: 16,
      },
    },
  },
});

export function WithTheming({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
