import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React from 'react'
import UsbFile from '../../../UsbFile';

export default function routes() {
const PPL = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <PPL.Navigator initialRouteName={'Home'} screenOptions={{ headerShown: false }}>
      <PPL.Screen name="Home" component={UsbFile} />

</PPL.Navigator>
    </NavigationContainer>
  )
}
