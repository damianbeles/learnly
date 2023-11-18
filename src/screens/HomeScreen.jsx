import { View } from 'react-native-ui-lib';
import { TopRightCloudSvg } from '../components/svg/TopRightCloudSvg';
import { BottomLeftCloud } from '../components/svg/BottomLeftCloud';
import { SettingsGearsSvg } from '../components/svg/SettingsGearsSvg';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function HomeScreen({ navigation }) {
  const goToSettingsScreen = () => {
    navigation.navigate('SettingsScreen');
  };

  return (
    <View flex>
      <View absT absR>
        <TopRightCloudSvg />
      </View>
      <View absT absR padding-30>
        <TouchableOpacity onPress={goToSettingsScreen}>
          <SettingsGearsSvg />
        </TouchableOpacity>
      </View>
      <View absB absL>
        <BottomLeftCloud />
      </View>
    </View>
  );
}
