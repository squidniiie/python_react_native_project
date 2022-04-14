import { StyleSheet, View, Text, TextInput, Button, SafeAreaView } from 'react-native'
import React, { useState } from 'react'

const EditForm = (item) => {
    // console.log("this is the item object", item)
    const data = item.route.params.route.params
    console.log("This is the edit form data", data)
    // console.log("This is the data", data)
    const [first_name, setFirstName] = useState(data.first_name);
    const [last_name, setLastName] = useState(data.last_name);
    const [image, setImage] = useState(data.image);
    const [email, setEmail] = useState(data.email);
    const [password, setPassword] = useState(data.password);
    const [location, setLocation] = useState(data.location);
    // const [error, setError] = useState([]);

    const submitHandler = () => {
        fetch(`http://127.0.0.1:5000/update/${data.id}`
            , {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    first_name: first_name,
                    last_name: last_name,
                    image: image,
                    email: email,
                    password: password,
                    location: location
                })
            }
        )
            // .then(res => {
            //     // if (!res.ok) {
            //     //     throw Error('did not work')
            //     // }
            //     return res.json()
            // })
            .then(data => {
                console.log("this is the data")
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    const deleteHandler = (data) => {
        console.log(data.id, "hi jack")
        fetch(`http://127.0.0.1:5000/delete/${data.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if (!res.ok) {
                    throw Error('did not work')
                }
                // navigation.navigate('Home')
                console.log(res, "deletehandler")
            })
            .catch(error => console.log(error))
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
                        defaultValue={first_name}
                        value={first_name}
                        editable={true}
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
                <View style={styles.row}>
                    <Text style={styles.label}>Email Address</Text>
                    <TextInput
                        style={[styles.input, styles.shadow]}
                        placeholder="Email Address"
                        value={email}
                        autoCapitalize='none'
                        onChangeText={setEmail} />
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Password</Text>
                    <TextInput
                        style={[styles.input, styles.shadow]}
                        placeholder="Password"
                        value={password}
                        secureTextEntry={true}
                        onChangeText={(text) => { setPassword(text) }} />
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
                <Button
                    title="Update"
                    onPress={() => {
                        submitHandler()
                    }}>
                </Button>
                <Button title="Delete" mode="contained"
                    onPress={() => {
                        deleteHandler(data)
                        console.log("deleted", data.id)
                        // navigation.navigate('Home')
                    }}>
                    <Text>Delete</Text>
                </Button>
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
export default EditForm