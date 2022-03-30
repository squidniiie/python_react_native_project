import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import VendorScreen from '../screens/messagesscreen/VendorScreen'
import MessagesScreen from '../screens/messagesscreen/MessagesScreen'
const Stack = createStackNavigator()
const HomeStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen component={MessagesScreen} name="MessagesScreen" />
            <Stack.Screen component={VendorScreen} name="VendorScreen" />
        </Stack.Navigator>
    )
}

export default HomeStack