import { Assets, Image, Text, View } from 'react-native-ui-lib';
import { KSpacer } from '../components/KSpacer';
import { KButton } from '../components/KButton';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Colors } from '../constants/colors';

export function CongratsScreen({ navigation }) {
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View flex bg-cerulean padding-56>
      <View flex bg-white br60 center>
        <Text title>Congrats!</Text>
        <KSpacer h={30} />
        <Text name>You did it!🎉</Text>
        <View absB absR padding-60>
          <KButton
            title="To Home"
            onPress={goBack}
            iconRight={
              <FontAwesomeIcon
                icon={['fas', 'chevron-right']}
                color={Colors.white}
                size={40}
                style={{ top: 2 }}
              />
            }
          />
        </View>
        <View absB absL>
          <Image source={Assets.icons.teddyBear} />
        </View>
      </View>
    </View>
  );
}
