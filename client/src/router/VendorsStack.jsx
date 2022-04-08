import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import VendorScreen from '../screens/VendorScreen'
import MessagesScreen from '../screens/MessagesScreen'
const Vendors = createStackNavigator()
const VendorsStack = () => {
    return (
        <Vendors.Navigator
            screenOptions={{ headerShown: false }}>
            <Vendors.Screen component={MessagesScreen} name="MessagesScreen" />
            <Vendors.Screen component={VendorScreen} name="VendorScreen" />
        </Vendors.Navigator>
    )
}
export default VendorsStack