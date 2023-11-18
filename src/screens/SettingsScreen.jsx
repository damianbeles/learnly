import { Text, View, Switch } from 'react-native-ui-lib';
import { KButton } from '../components/KButton';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Colors } from '../constants/colors';
import { SettingsLabelSvg } from '../components/svg/SettingsLabelSvg';
import { KSpacer } from '../components/KSpacer';
import { useReducer } from 'react';

export function SettingsScreen({ navigation }) {
  const [sound, toggleSound] = useReducer(s => !s, true);
  const [tactical, toggleTactical] = useReducer(t => !t, true);

  const goBack = () => {
    navigation.goBack();
  };
  const resetStack = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'ChildrenScreen' }],
    });
  };

  return (
    <View flex paddingH-80 paddingV-60>
      <View row spread centerV>
        <KButton
          title="Back"
          iconLeft={
            <FontAwesomeIcon
              icon={['fas', 'chevron-left']}
              color={Colors.white}
              size={40}
              style={{ top: 2 }}
            />
          }
          onPress={goBack}
        />
        <View row>
          <Text settings>Settings</Text>
          <KSpacer w={36} />
          <SettingsLabelSvg />
        </View>
      </View>
      <KSpacer h={52} />
      <View
        flex
        spread
        bg-cerulean
        paddingV-64
        paddingH-80
        br60
        style={{ borderWidth: 8, borderColor: Colors.allports }}>
        <View>
          <View row spread centerV>
            <Text settingOptions>Sound Feedback</Text>
            <Switch
              value={sound}
              thumbSize={-24}
              thumbStyle={{
                height: 64,
                width: 64,
                borderRadius: 999,
              }}
              style={{
                height: 64,
                width: 128,
              }}
              offColor={Colors.alto}
              onColor={Colors.allports}
              onValueChange={toggleSound}
            />
          </View>
          <View row spread centerV>
            <Text settingOptions>Tactical Feedback</Text>
            <Switch
              value={tactical}
              thumbSize={-24}
              thumbStyle={{
                height: 64,
                width: 64,
                borderRadius: 999,
              }}
              style={{
                height: 64,
                width: 128,
              }}
              offColor={Colors.alto}
              onColor={Colors.allports}
              onValueChange={toggleTactical}
            />
          </View>
          <View row spread centerV>
            <Text settingOptions>Language</Text>
            <KButton
              title="English"
              bg-white
              select
              iconRight={
                <FontAwesomeIcon
                  icon={['fas', 'chevron-down']}
                  color={Colors.allports}
                  size={40}
                />
              }
            />
          </View>
        </View>
        <Text settingOptions onPress={resetStack}>
          Change Kid Account
        </Text>
      </View>
    </View>
  );
}
