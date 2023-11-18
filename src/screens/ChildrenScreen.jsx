import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Curtains } from '../components/layout/Curtains';
import { KSpacer } from '../components/KSpacer';
import { View, Text } from 'react-native-ui-lib';
import { KAvatar } from '../components/KAvatar';
import { KButton } from '../components/KButton';
import { useAuth } from '../hooks/useAuth';
import { Colors } from '../constants/colors';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL, PIC_URL } from '../constants/axios';

export function ChildrenScreen({ navigation }) {
  const { signOut } = useAuth();

  const [children, setChildren] = useState([]);
  const [loading, setIsLoading] = useState(true);

  const goToHomeScreen = () => {
    navigation.navigate('HomeScreen');
  };

  useEffect(() => {
    axios.get('/users/me?populate[children][populate]=*').then(res => {
      setChildren(res.data.children);
      setIsLoading(false);
    });
  }, []);

  return (
    <View flex center>
      <Curtains />
      <Text title>Welcome!</Text>
      <KSpacer h={64} />
      <View style={{ width: '80%' }}>
        {loading ? (
          <ActivityIndicator size="large" />
        ) : (
          <FlatList
            horizontal
            data={children}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={goToHomeScreen}>
                <View centerH width={280}>
                  <KAvatar image={PIC_URL + item.avatar.url} />
                  <KSpacer h={24} />
                  <Text name>{item.firstName}</Text>
                </View>
              </TouchableOpacity>
            )}
            ItemSeparatorComponent={() => <KSpacer w={144} />}
          />
        )}
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
