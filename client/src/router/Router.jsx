import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from '../screens/loginscreen/LoginScreen'
import BottomTab from './BottomTab'
import React from 'react'
import ProfileScreen from '../screens/profile/ProfileScreen'
import HomeScreen from '../screens/homescreen/HomeScreen'
import EditForm from '../components/profile/EditForm'
import DrawerStack from '../router/DrawerStack'


const Stack = createStackNavigator()
const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen component={BottomTab} name="HomeTabs" />
                <Stack.Screen component={LoginScreen} name="Login" />
                <Stack.Screen component={HomeScreen} name="Home" />
                <Stack.Screen component={EditForm} name="Edit" />
                <Stack.Screen component={ProfileScreen} name="ProfileScreen" />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router