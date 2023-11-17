import { View } from 'react-native';

interface Props {
  w?: number;
  h?: number;
}

export function KSpacer({ w = 10, h = 10 }: Props) {
  return <View style={{ width: w, height: h }} />;
}
