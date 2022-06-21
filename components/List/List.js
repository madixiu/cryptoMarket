import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CryptoList from './CryptoList'
import CryptoDetail from './CryptoDetail';

const Stack = createNativeStackNavigator();
const Main = () => {
  return (
    <Stack.Navigator  screenOptions={{ headerShown: false }}>
      <Stack.Screen name="CryptoList" component={CryptoList} />
      <Stack.Screen name="CryptoDetail" component={CryptoDetail} />
    </Stack.Navigator>
  );
};

export default Main;
