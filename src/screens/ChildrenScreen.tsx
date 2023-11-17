import { ScrollView, View } from 'react-native';
import { Curtains } from '../components/layout/Curtains';
import { KSpacer } from '../components/KSpacer';
import { Text, Avatar } from '@rneui/themed';

export function ChildrenScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Curtains />
      <Text title>Welcome!</Text>
      <KSpacer h={64} />
      <View style={{ width: '80%' }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{ alignItems: 'center' }}>
            <Avatar
              rounded
              source={{ uri: 'https://randomuser.me/api/portraits/men/36.jpg' }}
            />
            <KSpacer h={24} />
            <Text name>Alexandru</Text>
          </View>
          <KSpacer w={144} />
          <View style={{ alignItems: 'center' }}>
            <Avatar
              rounded
              source={{ uri: 'https://randomuser.me/api/portraits/men/36.jpg' }}
            />
            <KSpacer h={24} />
            <Text name>Alexandru</Text>
          </View>
          <KSpacer w={144} />
          <View style={{ alignItems: 'center' }}>
            <Avatar
              rounded
              source={{ uri: 'https://randomuser.me/api/portraits/men/36.jpg' }}
            />
            <KSpacer h={24} />
            <Text name>Alexandru</Text>
          </View>
          <KSpacer w={144} />
          <View style={{ alignItems: 'center' }}>
            <Avatar
              rounded
              source={{ uri: 'https://randomuser.me/api/portraits/men/36.jpg' }}
            />
            <KSpacer h={24} />
            <Text name>Alexandru</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
