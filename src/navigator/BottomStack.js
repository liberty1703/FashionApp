import { View, Text, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/Home/HomeScreen';
import CartScreen from '../screens/Cart/CartScreen';
import FavouriteScreen from '../screens/Favourite/FavouriteScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';

const BottomStack = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator screenOptions={{ headerShown: false, }}>
            <Tab.Screen
                name='Home'
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        return (
                            <Image source={require('../../assets/images/home.png')} style={{ height: 20, width: 20 }} />
                        )
                    },
                }}
            />
            <Tab.Screen
                name='Cart'
                component={CartScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        return (
                            <Image source={require('../../assets/images/cart.png')} style={{ height: 20, width: 20 }} />
                        )
                    }
                }}
            />
            <Tab.Screen
                name='Favourite'
                component={FavouriteScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        return (
                            <Image source={require('../../assets/images/favourite.png')} style={{ height: 20, width: 20 }} />
                        )
                    }
                }} />
            <Tab.Screen
                name='Profile'
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        return (
                            <Image source={require('../../assets/images/user.png')} style={{ height: 30, width: 30 }} />
                        )
                    }
                }} />
        </Tab.Navigator>
    )
}

export default BottomStack