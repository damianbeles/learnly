import { ScrollView } from 'react-native';
import { Curtains } from '../components/layout/Curtains';
import { KSpacer } from '../components/KSpacer';
import { View, Text } from 'react-native-ui-lib';
import { KAvatar } from '../components/KAvatar';
import { KButton } from '../components/KButton';
import { useAuth } from '../hooks/useAuth';
import { Colors } from '../constants/colors';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

export function ChildrenScreen() {
  const { signOut } = useAuth();

  return (
    <View flex center>
      <Curtains />
      <Text title>Welcome!</Text>
      <KSpacer h={64} />
      <View style={{ width: '80%' }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View centerH>
            <KAvatar image="https://randomuser.me/api/portraits/men/36.jpg" />
            <KSpacer h={24} />
            <Text name>Alexandru</Text>
          </View>
          <KSpacer w={144} />
          <View centerH>
            <KAvatar image="https://randomuser.me/api/portraits/men/36.jpg" />
            <KSpacer h={24} />
            <Text name>Alexandru</Text>
          </View>
          <KSpacer w={144} />
          <View centerH>
            <KAvatar image="https://randomuser.me/api/portraits/men/36.jpg" />
            <KSpacer h={24} />
            <Text name>Alexandru</Text>
          </View>
          <KSpacer w={144} />
          <View centerH>
            <KAvatar image="https://randomuser.me/api/portraits/men/36.jpg" />
            <KSpacer h={24} />
            <Text name>Alexandru</Text>
          </View>
        </ScrollView>
        <KSpacer h={60} />
        <KButton
          title="Log Out"
          onPress={signOut}
          style={{ alignSelf: 'flex-start' }}
          iconLeft={
            <FontAwesomeIcon
              icon={['fas', 'chevron-left']}
              color={Colors.white}
              size={40}
              style={{ top: 2 }}
            />
          }
        />
      </View>
    </View>
  );
}
