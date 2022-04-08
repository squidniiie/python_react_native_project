import { SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import LoginForm from '../components/login/LoginForm'
import RegisterForm from '../components/profile/RegisterForm'

const LoginScreen = ({ navigation }) => {
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
            <RegisterForm navigation={navigation} />
            <LoginForm navigation={navigation} />
        </ScrollView>
    )
}
export default LoginScreen