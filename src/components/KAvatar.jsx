import { Avatar } from 'react-native-ui-lib';
import { Colors } from '../constants/colors';

export function KAvatar({ image }) {
  return (
    <Avatar
      source={{ uri: image }}
      size={156}
      imageStyle={{ borderWidth: 4, borderColor: Colors.cerulean }}
    />
  );
}
