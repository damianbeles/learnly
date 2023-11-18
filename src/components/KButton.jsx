import { Text } from 'react-native-ui-lib';
import { Colors } from '../constants/colors';
import { TouchableOpacity } from 'react-native';
import { KSpacer } from './KSpacer';

export function KButton({ title, iconLeft, iconRight, onPress, ...rest }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        rest.style,
        {
          backgroundColor: Colors.cerulean,
          borderWidth: 4,
          borderColor: Colors.allports,
          borderRadius: 18,
          padding: 12,
          flexDirection: 'row',
          alignItems: 'center',
        },
      ]}>
      {iconLeft}
      {iconLeft && <KSpacer w={16} />}
      <Text button>{title}</Text>
      {iconRight && <KSpacer w={16} />}
      {iconRight}
    </TouchableOpacity>
  );
}
