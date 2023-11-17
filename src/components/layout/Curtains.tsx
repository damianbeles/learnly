import { StyleSheet, View } from 'react-native';
import { LeftCurtainSvg } from '../svg/LeftCurtainSvg';
import { RightCurtainSvg } from '../svg/RightCurtainSvg';

export function Curtains() {
  return (
    <View style={StyleSheet.absoluteFill}>
      <View style={StyleSheet.absoluteFill}>
        <LeftCurtainSvg />
      </View>
      <View style={{ position: 'absolute', right: 0 }}>
        <RightCurtainSvg />
      </View>
    </View>
  );
}
