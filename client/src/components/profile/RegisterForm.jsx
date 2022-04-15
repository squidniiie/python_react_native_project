import { View, Text, TextInput, StyleSheet, Button, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { AuthContext } from '../../AuthContext'

const RegisterForm = ({ navigation }) => {
    // console.log(navigation)
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [image, setImage] = useState('');
    const [email, setEmail] = useState('');
    const [location, setLocation] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [errors, setErrors] = useState({});

    const { signUp, setUser } = React.useContext(AuthContext);

    const submitHandler = () => {
        // https://a955-76-175-74-35.ngrok.io/login
        fetch(`http://127.0.0.1:5000/register`, {
            withCredentials: true,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                first_name: first_name,
                last_name: last_name,
                image: image,
                email: email,
                location: location,
                password: password,
                confirmPass: confirmPass
            })
        })
            .then(res => {
                return res.json()
            })
            .then(data => {
                console.log("Data from register: ", data)
                setUser(data.user)
                if (data['errs']) {
                    setErrors(data['errs']);
                } else {
                    navigation.navigate('SignIn')
                    // signUp()
                }
            })
            .catch(error => console.log("There is an error: ", error))
    }
    return (
        <SafeAreaView>
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
                    {errors && errors['first_name'] &&
                        <Text style={{ color: "red" }}>{errors['first_name']}</Text>
                    }
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
                    {errors && errors['last_name'] &&
                        <Text style={{ color: "red" }}>{errors['last_name']}</Text>}
                </View>
                <View
                    style={styles.row}>
                    <Text
                        style={styles.label}
                    >Image Url</Text>
                    <TextInput
                        style={[styles.input, styles.shadow]}
                        placeholder="image"
                        value={image}
                        onChangeText={(text) => { setImage(text) }} />
                    {errors && errors['image'] &&
                        <Text style={{ color: "red" }}>{errors['image']}</Text>
                    }
                </View>
                <View
                    style={styles.row}>
                    <Text
                        style={styles.label}
                    >Location</Text>
                    <TextInput
                        style={[styles.input, styles.shadow]}
                        placeholder="Location"
                        value={location}
                        onChangeText={(text) => { setLocation(text) }} />
                    {errors && errors['location'] &&
                        <Text style={{ color: "red" }}>{errors['location']}</Text>
                    }
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Email Address</Text>
                    <TextInput
                        style={[styles.input, styles.shadow]}
                        placeholder="Email Address"
                        value={email}
                        autoCapitalize='none'
                        onChangeText={(text) => { setEmail(text) }} />
                    {errors && errors['email'] &&
                        <Text style={{ color: "red" }}>{errors['email']}</Text>
                    }
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Password</Text>
                    <TextInput
                        style={[styles.input, styles.shadow]}
                        placeholder="Password"
                        value={password}
                        secureTextEntry={true}
                        onChangeText={(text) => { setPassword(text) }} />
                    {errors && errors['password'] &&
                        <Text style={{ color: "red" }}>{errors['password']}</Text>
                    }
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Confirm Password</Text>
                    <TextInput
                        style={[styles.input, styles.shadow]}
                        placeholder="Confirm Password"
                        value={confirmPass}
                        secureTextEntry={true}
                        onChangeText={(text) => {
                            setConfirmPass(text)
                        }} />
                    {errors && errors['confirmPass'] &&
                        <Text style={{ color: "red" }}>{errors['confirmPass']}</Text>
                    }
                </View>
                <Button
                    title="Register"
                    onPress={() => {
                        // signUp(email, password, first_name, last_name, location)
                        submitHandler()
                    }} />
            </View>
        </SafeAreaView>
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
export default RegisterForm