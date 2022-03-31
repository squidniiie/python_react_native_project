import { View, Text } from 'react-native'
import HomeScreen from '../screens/HomeScreen'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Header from '../components/header/Header'
import LoginScreen from '../screens/LoginScreen'
import EditForm from '../components/profile/EditForm'
import ProfileScreen from '../screens/ProfileScreen'


const Stack = createStackNavigator()

const HomeStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen component={HomeScreen} name="HomeScreen" />
            <Stack.Screen component={LoginScreen} name="Login" />
            <Stack.Screen component={EditForm} name="Edit" />
            <Stack.Screen component={ProfileScreen} name="ProfileScreen" />
        </Stack.Navigator>


    )
}

export default HomeStack