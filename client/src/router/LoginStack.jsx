import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from '../screens/LoginScreen'

const Login = createStackNavigator()
const LoginStack = ({ navigation }) => {

    return (
        <Login.Navigator
            screenOptions={{ headerShown: false }}>
            <Login.Screen component={LoginScreen} name="LoginScreen" navigation={navigation} />
        </Login.Navigator>


    )
}

export default LoginStack