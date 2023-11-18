import { useAuth } from '../hooks/useAuth';
import { useEffect, useState } from 'react';

import * as SecureStore from 'expo-secure-store';

export function WithProgrammaticalyLogin({ children }) {
  const [isDoneLoading, setIsDoneLoading] = useState(false);

  const { signIn } = useAuth();

  useEffect(() => {
    (async () => {
      const jwt = await SecureStore.getItemAsync('jwt');
      if (jwt) signIn(jwt);
      setIsDoneLoading(true);
    })();
  }, []);

  return isDoneLoading && <>{children}</>;
}
