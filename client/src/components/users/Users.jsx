import { View, Text, Pressable, StyleSheet, Image } from 'react-native'
import React from 'react'


const Users = ({ item, navigation }) => {
    const onPress = () => {
        navigation.navigate('ProfileScreen', item
        );
        // console.log("Users component:", item)
    }
    return (
        <Pressable onPress={({ item }) => { onPress(item) }}
            style={[styles.card, styles.shadow]}>
            <View style={styles.cardHeader}>
                <Image style={styles.image} source={{ uri: 'https://stabmag.com/wp-content/uploads/2021/04/Mark-Zuckerberg-Spooks-the-Internet-With-Too-Much-Sunscreen-on-His-Face-in-Hawaii-01-1024x538.jpg' }} />
                <View >
                    <Text style={styles.name}>{item.first_name}</Text>
                    <Text style={{ textAlign: 'center' }}>
                        {item.location}</Text>
                </View>
            </View>
            <View style={{ marginTop: 5 }}>
                <Text>*Putting an image carousel here with horizontal scroll*</Text>
            </View>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        flex: 1
    },
    title: {
        fontWeight: 'bold',
        fontSize: 28,
        textAlign: 'center',
        marginTop: 5
    },
    card: {
        backgroundColor: 'white',
        padding: 15,
        paddingVertical: 20,
        borderRadius: 25,
        margin: 15,
    },
    shadow: {
        shadowColor: '#171717',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },
    name: {
        fontSize: 24,
        fontWeight: '700',

        // backgroundColor: 'red',
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 50,
        marginTop: 5
    },
    cardHeader: {
        // backgroundColor: 'cyan',
        // marginHorizontal: 5,
        // alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        textAlign: 'left'
    }
})

export default Users