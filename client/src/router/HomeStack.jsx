import HomeScreen from '../screens/HomeScreen'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from '../screens/LoginScreen'
import EditForm from '../components/profile/EditForm'
import ProfileScreen from '../screens/ProfileScreen'

const Home = createStackNavigator()
const HomeStack = () => {
    return (
        <Home.Navigator
            screenOptions={{ headerShown: false }}
        >
            <Home.Screen component={HomeScreen} name="HomeScreen" />
            {/* <Stack.Screen component={LoginScreen} name="Login" />
            <Stack.Screen component={EditForm} name="Edit" />
            <Stack.Screen component={ProfileScreen} name="ProfileScreen" /> */}
        </Home.Navigator>


    )
}

export default HomeStack