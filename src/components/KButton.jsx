import { Text } from 'react-native-ui-lib';
import { Colors } from '../constants/colors';
import { TouchableOpacity } from 'react-native';
import { KSpacer } from './KSpacer';

export function KButton({
  title,
  iconLeft,
  iconRight,
  onPress,
  select,
  ...rest
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        rest.style,
        {
          backgroundColor: !select ? Colors.cerulean : Colors.white,
          borderWidth: 4,
          borderColor: Colors.allports,
          borderRadius: !select ? 18 : 32,
          padding: 12,
          flexDirection: 'row',
          alignItems: 'center',
          ...(!select ? {} : { paddingHorizontal: 28 }),
        },
      ]}>
      {iconLeft}
      {iconLeft && <KSpacer w={16} />}
      <Text button={!select} select={select}>
        {title}
      </Text>
      {iconRight && <KSpacer w={!select ? 16 : 200} />}
      {iconRight}
    </TouchableOpacity>
  );
}
