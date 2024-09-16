import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Welcome from '../Welcome';
import Dashboard from '../Dashboard';
import BottomStack from './BottomStack';
import ProductDetails from '../screens/Home/ProductDetails';
import FavouriteScreen from '../screens/Favourite/FavouriteScreen';
import DetailScreen from '../screens/DeliveryDetails/DetailScreen';
import { Screen } from 'react-native-screens';
import ThankyouScreen from '../screens/Payment/ThankyouScreen';

import SearchScreen from '../screens/Search/search';
import NotificationScreen from '../screens/Notification/NotificationScreen';
import TodoFirstpage from '../screens/ToDoList/TodoFirstpage';
import AddScreen from '../screens/ToDoList/AddScreen';









const AppStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Bottom' component={BottomStack} />

            <Stack.Screen name='ProductDetails' component={ProductDetails} />
            <Stack.Screen name='FavouriteScreen' component={FavouriteScreen} />
            <Stack.Screen name='DetailScreen' component={DetailScreen} />
            <Stack.Screen name='ThankyouScreen' component={ThankyouScreen} />
            <Stack.Screen name='NotificationScreen' component={NotificationScreen} />
            <Stack.Screen name='SearchScreen' component={SearchScreen} />
            <Stack.Screen name='TodoFirstpage' component={TodoFirstpage} />
            <Stack.Screen name='AddScreen' component={AddScreen} />
        </Stack.Navigator>
    )
}
Screen
export default AppStack

const styles = StyleSheet.create({})