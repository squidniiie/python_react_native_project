import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-native'
import Feather from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'
const Profile = (item) => {
    // const { id } = useParams()
    // console.log("hello profile component", id)
    const navigation = useNavigation()
    // console.log(item.first_name, navigation)
    // console.log("Profile", navigation)
    const [data, setData] = useState([]);

    // useEffect(() => {
    //     fetch(`http:127.0.0.1:5000/users/${id}`, { method: 'GET' })
    //         .then(res => {
    //             if (!res.ok) {
    //                 throw Error('did not work')
    //             }
    //             return res.json()
    //         })
    //         .then(res => {
    //             console.log("second")
    //             setData(res.user)
    //         })
    //         .catch((error) => {
    //             console.log(error)
    //             alert(error)
    //         })
    // }, [])
    return (
        <View>
            <View style={[styles.card, styles.shadow]}>
                <View style={styles.container}>
                    <View>
                        <Image style={styles.image} source={{ uri: 'https://stabmag.com/wp-content/uploads/2021/04/Mark-Zuckerberg-Spooks-the-Internet-With-Too-Much-Sunscreen-on-His-Face-in-Hawaii-01-1024x538.jpg' }} />
                    </View>
                    <View style={styles.titleBox}>

                        <Text style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 18 }}>Hello, {item.first_name}</Text>
                        <Pressable
                            onPress={() => {
                                navigation.navigate('Edit', item)

                            }}
                        >
                            <Text>Edit Profile
                                <Feather name='edit' size={16} />
                            </Text>
                        </Pressable>

                        <Text>adding actions here</Text>
                    </View>
                </View>
            </View>
            <View style={[styles.card, styles.shadow]}>
                <Text>
                    {item.email}
                </Text>
                <Text>
                    {item.location}
                </Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
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
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    titleBox: {
        // backgroundColor: 'red',
        flexDirection: 'column'
    }
})

export default Profile