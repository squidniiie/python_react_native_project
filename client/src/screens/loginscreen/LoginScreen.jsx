import { View, Text, StyleSheet, TextInput, ScrollView, Button } from 'react-native'
import React from 'react'
import Login from '../../components/login/Login'

const LoginScreen = ({ navigation }) => {
    const submitHandler = () => {
        navigation.navigate('Home')
    }
    return (
        <ScrollView>
            <Login navigation={navigation} />
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
                    // defaultValue={email}
                    // value={email}
                    // onChangeText={(text) => { setEmail(text) }}
                    />
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Password</Text>
                    <TextInput
                        style={[styles.input, styles.shadow]}
                        placeholder="Password"
                        // value={password}
                        secureTextEntry={true}
                    // onEndEditing={validatePassword}
                    // onChangeText={(text) => { setPassword(text) }}
                    />
                    {/* {!!passwordError && (<Text style={styles.error}>{passwordError}</Text>)} */}
                </View>
                <Button
                    title="Register"
                    onPress={submitHandler}>
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
export default LoginScreen