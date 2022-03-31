import { View } from 'react-native'
import React from 'react'
import LoginForm from '../components/login/LoginForm'
import RegisterForm from '../components/profile/RegisterForm'


const LoginScreen = ({ navigation }) => {
    return (
        <View>
            <RegisterForm navigation={navigation} />
            <LoginForm navigation={navigation} />
        </View>
    )
}
export default LoginScreen