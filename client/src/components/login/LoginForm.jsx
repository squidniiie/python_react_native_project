
import { View, Text, TextInput, StyleSheet, ScrollView, Button } from 'react-native'
import React, { useState } from 'react'
import { AuthContext } from '../../AuthContext';


const LoginForm = ({ navigation }) => {
    const { SignIn, setUser } = React.useContext(AuthContext)
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [loginErrors, setLoginErrors] = useState({});
    const loginHandler = () => {
        // https://a955-76-175-74-35.ngrok.io/login
        fetch('http://127.0.0.1:5000/login', {
            withCredentials: true,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    email: loginEmail,
                    password: loginPassword
                }
            )
        })
            .then(res => {
                return res.json()
            })
            .then(data => {
                console.log("Data from loginForm: ", data)
                setUser(data.logged_in_user)
                if (data['loginErrors']) {
                    setLoginErrors(data['loginErrors']);
                }
                else {
                    navigation.navigate('SignIn')
                    // SignIn()
                }
            })
            .catch(error => console.log("There is an error: ", error))
    }
    return (
        <ScrollView>
            <View style={[styles.card, styles.shadow]}>
                <Text style={styles.heading}>Login</Text>
                <View
                    style={styles.row}
                >
                    <Text
                        style={styles.label}
                    >Email</Text>
                    <TextInput
                        style={[styles.input, styles.shadow]}
                        placeholder=" Email"
                        value={loginEmail}
                        onChangeText={(text) => { setLoginEmail(text) }}
                    />
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Password</Text>
                    <TextInput
                        style={[styles.input, styles.shadow]}
                        placeholder="Password"
                        value={loginPassword}
                        secureTextEntry={true}
                        onChangeText={(text) => { setLoginPassword(text) }}
                    />
                    {loginErrors && loginErrors['login'] &&
                        <Text style={{ color: "red" }}>{loginErrors['login']}</Text>
                    }
                </View>
                <Button
                    title="Login"
                    onPress={() => {
                        // signIn(loginEmail, loginPassword)
                        loginHandler()
                    }}>
                    Login
                </Button>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root: {
        padding: 10,
    },
    heading: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    row: {
        marginVertical: 5,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 5
    },
    input: {
        height: 40,
        backgroundColor: 'white',
        padding: 5,
        marginVertical: 5,
        borderRadius: 20,
    },
    card: {
        backgroundColor: 'white',
        padding: 18,
        paddingVertical: 35,
        borderRadius: 25,
        margin: 15,
        justifyContent: 'center'
    },
    shadow: {
        shadowColor: '#171717',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },
    error: { color: 'red' },
    button: {
        backgroundColor: 'turquoise',
        padding: 8,
        borderRadius: 20,
        marginVertical: 10,
        alignItems: 'center',
    },
    buttonText: {
        textAlign: 'center',
        justifyContent: 'center',
        color: 'white',
        fontWeight: '700'
    }
})

export default LoginForm