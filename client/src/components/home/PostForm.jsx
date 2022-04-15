import { View, Text, StyleSheet, Pressable, TextInput, Button } from 'react-native'
import React, { useState } from 'react'

const PostForm = () => {
    const [press, setPress] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [errors, setErrors] = useState({});
    const submitHandler = () => {
        fetch(`http://127.0.0.1:5000/create/post`, {
            withCredentials: true,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title,
                description: description,
                image: image
            })
        })
            .then(res => {
                return res.json()
            })
            .then(data => {
                console.log("Data from post: ", data)
                if (data['errs']) {
                    setErrors(data['errs']);
                } else {
                    navigation.navigate('SignIn')
                }
            })
            .catch(error => console.log("There is an error: ", error))
    }
    return (
        <View>

            <Pressable
                onPress={() => {
                    setPress(!press)
                }}>
                {press === false ?
                    <View style={[styles.container, styles.shadow]}>
                        <Text style={styles.heading}>add a ding</Text>
                    </View>
                    :
                    <View style={[styles.pressContainer, styles.shadow]}>
                        <Text style={styles.pressHeading}>Create a new Post</Text>
                        <View>
                            <Text style={styles.label}>Title</Text>
                            <TextInput
                                style={[styles.input, styles.shadow]}
                                placeholder="Title"
                                value={title}
                                onChangeText={(text) => { setTitle(text) }} />
                            {errors && errors['title'] &&
                                <Text style={{ color: "red" }}>{errors['title']}</Text>
                            }
                        </View>
                        <View>
                            <Text style={styles.label}>Description</Text>
                            <TextInput
                                style={[styles.input, styles.shadow]}
                                placeholder="Description"
                                value={description}
                                onChangeText={(text) => { setDescription(text) }} />
                            {errors && errors['description'] &&
                                <Text style={{ color: "red" }}>{errors['description']}</Text>
                            }
                        </View>
                        <View>
                            <Text style={styles.label}>Image URL</Text>
                            <TextInput
                                style={[styles.input, styles.shadow]}
                                placeholder="Image"
                                value={image}
                                onChangeText={(text) => { setImage(text) }} />
                        </View>
                        <Button title="Submit"
                            onPress={() => {
                                submitHandler()
                            }} />
                    </View>
                }
            </Pressable>
        </View>
    )
}

export default PostForm
const styles = StyleSheet.create({

    container: {
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 25,
        justifyContent: 'center',
        backgroundColor: 'orangered',
    },
    pressContainer: {
        margin: 20,
        backgroundColor: 'white',
        paddingVertical: 20,
        borderRadius: 25,
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        textTransform: 'lowercase',
        letterSpacing: 3,
    },
    pressHeading: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'grey'

    },
    shadow: {
        shadowColor: '#171717',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },
    input: {
        height: 40,
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 15
    },
})