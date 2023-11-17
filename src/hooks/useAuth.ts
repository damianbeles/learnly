import { useContext } from 'react';
import { AuthContext } from '../contexts/auth';

export function useAuth() {
  const {
    actions: { signIn, signOut },
    isLoggedIn,
  } = useContext(AuthContext);

  return {
    signIn,
    signOut,
    isLoggedIn,
  };
}
