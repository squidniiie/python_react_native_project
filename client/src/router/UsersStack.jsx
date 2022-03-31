import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import UsersScreen from '../screens/UsersScreen'

const Stack = createStackNavigator()
const ProfileStack = () => {

    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen component={UsersScreen} name="UsersScreen" />
        </Stack.Navigator>


    )
}

export default ProfileStack