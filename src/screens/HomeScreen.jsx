import { Text, View } from 'react-native-ui-lib';
import { TopRightCloudSvg } from '../components/svg/TopRightCloudSvg';
import { BottomLeftCloud } from '../components/svg/BottomLeftCloud';
import { SettingsGearsSvg } from '../components/svg/SettingsGearsSvg';
import { TouchableOpacity } from 'react-native';
import { KAvatar } from '../components/KAvatar';
import { KSpacer } from '../components/KSpacer';
import { Colors } from '../constants/colors';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

export function HomeScreen({ navigation }) {
  const goToSettingsScreen = () => {
    navigation.navigate('SettingsScreen');
  };

  return (
    <View flex>
      <View absT absR>
        <TopRightCloudSvg />
      </View>

      <View absB absL>
        <BottomLeftCloud />
      </View>
      <View flex spread margin-80>
        <View
          padding-24
          row
          centerV
          br60
          style={{
            alignSelf: 'flex-start',
            borderWidth: 6,
            borderColor: Colors.cerulean,
          }}>
          <KAvatar />
          <KSpacer w={100} />
          <Text input bold>
            Alexandru
          </Text>
        </View>
        <View style={{ alignSelf: 'center' }}>
          <Text name cerulean>
            Up next:
          </Text>
          <Text name cerulean>
            I.Colors
          </Text>
        </View>
        <TouchableOpacity
          style={{ alignItems: 'center', alignSelf: 'flex-end' }}>
          <View
            width={200}
            height={200}
            br100
            center
            style={{
              backgroundColor: Colors.cerulean,
              borderWidth: 6,
              borderColor: Colors.allports,
            }}>
            <FontAwesomeIcon
              icon={['fas', 'play']}
              size={120}
              color={Colors.white}
              style={{ left: 12 }}
            />
          </View>
          <KSpacer h={20} />
          <Text name cerulean>
            Play
          </Text>
        </TouchableOpacity>
      </View>
      <View absT absR padding-30>
        <TouchableOpacity onPress={goToSettingsScreen}>
          <SettingsGearsSvg />
        </TouchableOpacity>
      </View>
    </View>
  );
}
