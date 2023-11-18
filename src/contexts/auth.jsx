import { createContext, useCallback, useMemo, useState } from 'react';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const signIn = useCallback(jwt => {
    axios.interceptors.request.use(config => {
      config.headers.Authorization = `Bearer ${jwt}`;
      return config;
    });
    SecureStore.setItemAsync('jwt', jwt);
    setIsLoggedIn(true);
  }, []);

  const signOut = useCallback(() => {
    axios.interceptors.request.clear();
    SecureStore.deleteItemAsync('jwt');
    setIsLoggedIn(false);
  }, []);

  const authContextValue = useMemo(
    () => ({
      actions: { signIn, signOut },
      isLoggedIn,
    }),
    [isLoggedIn]
  );

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
}
