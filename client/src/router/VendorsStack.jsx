import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import VendorScreen from '../screens/VendorScreen'
import MessagesScreen from '../screens/MessagesScreen'
const Stack = createStackNavigator()
const VendorsStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen component={MessagesScreen} name="MessagesScreen" />
            <Stack.Screen component={VendorScreen} name="VendorScreen" />
        </Stack.Navigator>
    )
}

export default VendorsStack