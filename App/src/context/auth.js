// Import necessary modules
import React, { useState, useEffect, useContext } from 'react';
import { View, Text } from 'react-native'; // Import React Native components
import AsyncStorage from '@react-native-async-storage/async-storage'; // For storing data

// Create an AuthContext
const AuthContext = React.createContext();

// AuthProvider component
const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: '',
  });

  // Set authorization header for network requests
  axios.defaults.headers.common['Authorization'] = auth?.token;

  useEffect(() => {
    // Load data from AsyncStorage (similar to localStorage)
    const loadData = async () => {
      try {
        const data = await AsyncStorage.getItem('auth');
        if (data) {
          const parseData = JSON.parse(data);
          setAuth({
            ...auth,
            user: parseData.user,
            token: parseData.token,
          });
        }
      } catch (error) {
        console.error('Error loading auth data:', error);
      }
    };

    loadData();
  }, []);

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to access auth data
const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
