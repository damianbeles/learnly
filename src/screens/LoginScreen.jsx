import { View, Text } from 'react-native-ui-lib';
import { Curtains } from '../components/layout/Curtains';
import { KSpacer } from '../components/KSpacer';
import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import TextField from 'react-native-ui-lib/textField';
import { Colors } from '../constants/colors';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { KButton } from '../components/KButton';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import axios from 'axios';

export function LoginScreen() {
  const { signIn } = useAuth();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    axios
      .post('/auth/local', {
        identifier: username,
        password,
      })
      .then(res => signIn(res.data.jwt));
  };

  return (
    <View flex>
      <Curtains />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}>
        <View flex center paddingH-200>
          <View>
            <Text title>Log In</Text>
          </View>
          <KSpacer h={92} />
          <View width="100%" row spread>
            <Text label>Username</Text>
            <TextField
              input
              onChangeText={setUsername}
              padding-10
              paddingH-24
              fieldStyle={{
                borderWidth: 2,
                borderRadius: 99,
                borderColor: Colors.cerulean,
              }}
              containerStyle={{ width: '60%' }}
            />
          </View>
          <KSpacer h={20} />
          <View width="100%" row spread>
            <Text label>Password</Text>
            <TextField
              input
              onChangeText={setPassword}
              padding-10
              paddingH-24
              secureTextEntry
              fieldStyle={{
                borderWidth: 2,
                borderRadius: 99,
                borderColor: Colors.cerulean,
              }}
              containerStyle={{ width: '60%' }}
            />
          </View>
          <KSpacer h={20} />
          <KButton
            title="Next"
            onPress={login}
            iconRight={
              <FontAwesomeIcon
                icon={['fas', 'chevron-right']}
                color={Colors.white}
                size={40}
                style={{ top: 2 }}
              />
            }
            style={{ alignSelf: 'flex-end' }}
          />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}
