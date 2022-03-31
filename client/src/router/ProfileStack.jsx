
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ProfileScreen from '../screens/ProfileScreen'
const Stack = createStackNavigator()
const ProfileStack = () => {

    return (
        <Stack.Navigator
        >
            <Stack.Screen component={ProfileScreen} name="ProfileScreen" />

        </Stack.Navigator>


    )
}

export default ProfileStack