import { View, Text, TextInput, StyleSheet, Button, Alert } from 'react-native'
import React, { useState } from 'react'
import { showMessage, hideMessage } from 'react-native-flash-message'
const Form = ({ navigation }) => {
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [location, setLocation] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [error, setError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const submitHandler = () => {
        fetch(`http://127.0.0.1:5000/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                first_name: first_name,
                last_name: last_name,
                email: email,
                location: location,
                password: password,
                confirmPass: confirmPass

            })
        })
            .then(res => {
                if (!res.ok) {
                    throw Error('did not work')
                }
                return res.json()
            })
            .then(data => {
                console.log(data)
                for (m in data['messages']) {
                    showMessage({
                        message: data['messages'][m],
                        type: "danger"
                    })
                }
            })
            .catch(error => {
                console.log(error.message)
                // setError(error)
            })
    }


    // if (!!emailError) {
    //     Alert.alert('Please check all field errors before submission');
    //     return;
    // }
    // const validateEmail = () => {
    //     if (email.length < 3) {
    //         setEmailError('Email address must be more than 3 characters')
    //     }
    // }
    // const validatePassword = () => {
    //     if (password.length < 8) {
    //         setPasswordError('Password address must be more than 8 characters')
    //     }
    // }

    return (
        <View style={[styles.card, styles.shadow]}>
            <Text
                style={styles.heading}
            >Get Started with Ding</Text>
            <View
                style={styles.row}
            >
                <Text
                    style={styles.label}
                >First Name</Text>
                <TextInput
                    style={[styles.input, styles.shadow]}
                    placeholder="First Name"
                    value={first_name}
                    onChangeText={(text) => { setFirstName(text) }} />
            </View>
            <View
                style={styles.row}
            >
                <Text
                    style={styles.label}
                >Last Name</Text>
                <TextInput
                    style={[styles.input, styles.shadow]}
                    placeholder="Last Name"
                    value={last_name}
                    onChangeText={(text) => { setLastName(text) }} />
            </View>
            <View
                style={styles.row}
            >
                <Text
                    style={styles.label}
                >Location</Text>
                <TextInput
                    style={[styles.input, styles.shadow]}
                    placeholder="Location"
                    value={location}
                    onChangeText={(text) => { setLocation(text) }} />
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Email Address</Text>
                <TextInput
                    style={[styles.input, styles.shadow]}
                    placeholder="Email Address"
                    value={email}
                    autoCapitalize='none'
                    // onEndEditing={validateEmail}
                    onChangeText={(text) => { setEmail(text) }} />
                {/* {!!emailError && (<Text style={styles.error}>{emailError}</Text>)} */}
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Password</Text>
                <TextInput
                    style={[styles.input, styles.shadow]}
                    placeholder="Password"
                    value={password}
                    secureTextEntry={true}
                    // onEndEditing={validatePassword}
                    onChangeText={(text) => { setPassword(text) }} />
                {/* {!!passwordError && (<Text style={styles.error}>{passwordError}</Text>)} */}
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Confirm Password</Text>
                <TextInput
                    style={[styles.input, styles.shadow]}
                    placeholder="Confirm Password"
                    value={confirmPass}
                    secureTextEntry={true}
                    // onEndEditing={validatePassword}
                    onChangeText={(text) => {
                        setConfirmPass(text)
                    }} />
                {/* {!!passwordError && (<Text style={styles.error}>{passwordError}</Text>)} */}
            </View>
            <Button
                title="Register"
                onPress={() => {
                    navigation.navigate('Home')
                    submitHandler()
                }}>
                Register
            </Button>
        </View>
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
export default Form