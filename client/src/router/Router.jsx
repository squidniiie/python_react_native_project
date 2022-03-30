import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../components/login/Login'
import BottomTab from './BottomTab'
import React from 'react'


const Root = createStackNavigator()
const Router = () => {
    return (
        <NavigationContainer>
            <Root.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen component={BottomTab} name="HomeTabs" />
                <Stack.Screen component={HomeStack} name="Home" />
                <Stack.Screen component={SettingsStack} name="SettingsStack" />
                <Stack.Screen component={ProfileStack} name="ProfileStack" />
            </Root.Navigator>
        </NavigationContainer>
    )
}

export default Router