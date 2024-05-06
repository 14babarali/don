import React, { useState, useEffect, useContext, createContext } from 'react';
import axios from 'axios';

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: '',
  });

  // Set default axios headers
  axios.defaults.headers.common['Authorization'] = auth?.token;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await AsyncStorage.getItem('auth');
        if (data) {
          const parsedData = JSON.parse(data);
          setAuth({
            ...auth,
            user: parsedData.user,
            token: parsedData.token,
          });
        }
      } catch (error) {
        console.error('Error fetching auth data:', error);
      }
    };

    fetchData();
    //eslint-disable-next-line
  }, []);

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook
const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
