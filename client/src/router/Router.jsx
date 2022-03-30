import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import BottomTab from './BottomTab'
import React from 'react'
import HomeStack from './HomeStack'
import ProfileStack from './ProfileStack'
// import DrawerStack from '../router/DrawerStack'
import SettingsStack from './SettingsStack'
const Stack = createStackNavigator()
const Router = () => {
    return (
        <NavigationContainer
        >
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen component={BottomTab} name="HomeTabs" />
                <Stack.Screen component={HomeStack} name="Home" />
                <Stack.Screen component={SettingsStack} name="SettingsStack" />
                <Stack.Screen component={ProfileStack} name="ProfileStack" />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router