import { View } from 'react-native';
import { Curtains } from '../components/layout/Curtains';
import { Button, Input, Text } from '@rneui/themed';
import { KSpacer } from '../components/KSpacer';
import { Colors } from '../constants/colors';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useState } from 'react';

export function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Curtains />
      <Text title>Log In</Text>
      <KSpacer h={92} />
      <View
        style={{
          flexDirection: 'row',
          width: '60%',
          justifyContent: 'space-between',
        }}>
        <Text label>Username</Text>
        <KSpacer w={40} />
        <Input value={username} onChangeText={setUsername} />
      </View>
      <KSpacer h={20} />
      <View
        style={{
          flexDirection: 'row',
          width: '60%',
          justifyContent: 'space-between',
        }}>
        <Text label>Password</Text>
        <KSpacer w={40} />
        <Input secureTextEntry value={password} onChangeText={setPassword} />
      </View>
      <View style={{ position: 'absolute', bottom: 100, right: 100 }}>
        <Button
          title="Next"
          iconRight
          icon={
            <FontAwesomeIcon
              icon={['fas', 'chevron-right']}
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
