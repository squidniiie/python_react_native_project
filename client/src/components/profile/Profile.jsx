import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'
const Profile = (item) => {
    const navigation = useNavigation()
    const user = item.route.params
    console.log("This is all the props", user)
    // console.log("Profile item object is correct", user)
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
                                navigation.navigate('Edit', item, user)
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