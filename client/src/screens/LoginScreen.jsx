import { SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import LoginForm from '../components/login/LoginForm'
import RegisterForm from '../components/profile/RegisterForm'


const LoginScreen = ({ navigation }) => {
    return (
        <SafeAreaView>
            <ScrollView>
                <RegisterForm navigation={navigation} />
                <LoginForm navigation={navigation} />
            </ScrollView>
        </SafeAreaView>
    )
}
export default LoginScreen