/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from 'react';
import Cookie from 'js-cookie';
import endPoints from '@services/api';
import useMakeFetch from '@hooks/useMakeFetch';

const useProviderAuth = () => {
  const [user, setUser] = useState(Cookie.get('access_token') || null);

  useEffect(() => {
    const access_token = Cookie.get('access_token');
    if (access_token) {
      (async () => {
        try {
          const profileResponse = await useMakeFetch(endPoints.auth.profile, 'GET');
          if (!profileResponse.ok) {
            throw new Error('Failed to fetch user profile');
          }
          const user = await profileResponse.json();
          setUser(user);
        } catch (error) {
          throw new Error(error);
        }
      })();
    }
  }, []);

  const signIn = async (email, password) => {
    try {
      const response = await useMakeFetch(endPoints.auth.login, 'POST', { email, password });
      if (!response.ok) {
        throw new Error('Failed to log in');
      }
      const { access_token } = await response.json();
      if (access_token) {
        Cookie.set('access_token', access_token, { expires: 5 });
        const profileResponse = await useMakeFetch(endPoints.auth.profile, 'GET');
        if (!profileResponse.ok) {
          throw new Error('Failed to fetch user profile');
        }
        const user = await profileResponse.json();
        setUser(user);
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  const signOut = async () => {
    Cookie.remove('access_token');
    setUser(null);
  };

  return {
    user,
    signIn,
    signOut,
  };
};

export default useProviderAuth;