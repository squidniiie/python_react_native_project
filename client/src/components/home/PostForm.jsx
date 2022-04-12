import { View, Text, StyleSheet, Pressable, TextInput } from 'react-native'
import React, { useState } from 'react'

const PostForm = () => {
    const [press, setPress] = useState(false);
    return (
        <Pressable
            onPress={() => {
                setPress(!press)
            }}>
            {press === false ?
                <View style={[styles.container, styles.shadow]}>
                    <Text style={styles.heading}>Press me</Text>
                </View>
                :
                <View style={[styles.pressContainer, styles.shadow]}>
                    <Text style={styles.pressHeading}>Create a new Post</Text>
                    <View>
                        <Text style={styles.label}>Title</Text>
                        <TextInput
                            style={[styles.input, styles.shadow]} />
                    </View>
                    <View>
                        <Text style={styles.label}>Description</Text>
                        <TextInput
                            style={[styles.input, styles.shadow]} />
                    </View>
                    <View>
                        <Text style={styles.label}>Image URL</Text>
                        <TextInput
                            style={[styles.input, styles.shadow]} />
                    </View>

                </View>
            }
        </Pressable>
    )
}

export default PostForm
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 10,
        marginHorizontal: 20,
        borderRadius: 25,
        marginVertical: 15,
        justifyContent: 'center',
        backgroundColor: 'orangered',
    },
    pressContainer: {
        margin: 20,
        backgroundColor: 'white',
        paddingVertical: 10,
        borderRadius: 25,
    },
    heading: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
    },
    pressHeading: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',

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
        // width: '90%',
        // paddingVertical: 5,
        // marginVertical: 5,
        borderRadius: 20,

    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 15
    },
})