import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SettingsScreen from '../screens/Settings/SettingsScreen'

const Stack = createStackNavigator()
const ProfileStack = () => {

    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen component={SettingsScreen} name="SettingsScreen" />
        </Stack.Navigator>


    )
}

export default ProfileStack