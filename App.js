import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './src/navigator/AuthStack';
import AppStack from './src/navigator/AppStack';
import ScreenA from './src/Test/ScreenA';
import ScreenB from './src/Test/ScreenB';


const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name='ScreenA' component={ScreenA} />
        <Stack.Screen name='ScreenB' component={ScreenB} /> */}
        <Stack.Screen name='Auth' component={AuthStack} />
        <Stack.Screen name='Main' component={AppStack} />
      </Stack.Navigator>

    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
