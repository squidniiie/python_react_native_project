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
                <Root.Screen component={BottomTab} name="HomeTabs" />
                <Root.Screen component={Login} name="Login" />
            </Root.Navigator>
        </NavigationContainer>
    )
}

export default Router