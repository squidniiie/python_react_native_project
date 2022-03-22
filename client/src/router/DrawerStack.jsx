import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import DrawerContent from './DrawerContent'
import HomeScreen from '../screens/homescreen/HomeScreen'
const Drawer = createDrawerNavigator()
const DrawerStack = () => {
    return (
        <Drawer.Navigator screenOptions={{ headerShown: false }}>
            <Drawer.Screen
                component={HomeScreen} name="Home"
            // options={{
            //     tabBarIcon: ({ color }) =>
            //         (<Feather name='log-in' color={color} size={28} />),
            // }}
            />
        </Drawer.Navigator>
    )
}

export default DrawerStack