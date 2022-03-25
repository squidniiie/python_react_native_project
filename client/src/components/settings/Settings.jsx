import { View, Text, Pressable, StyleSheet, Button } from 'react-native'
import React from 'react'


const Settings = ({ item, navigation }) => {

    const onPress = () => {
        navigation.navigate('ProfileScreen', item
        );
        // console.log("Settings:", item.first_name)
        // console.log(navigation)
    }
    return (
        <Pressable onPress={({ item }) => { onPress(item) }}
            style={[styles.card, styles.shadow]}>
            <View
                style={styles.cardHeader}
            >
                <Text style={styles.name}>{item.first_name}</Text>
            </View>
            <View style={{ flexDirection: 'column' }}>
                <Text style={{ textAlign: 'right' }}>{item.location}</Text>
            </View>
            <View style={{ marginTop: 5 }}>
                <Text>*Putting an image carousel here with horizontal scroll*</Text>
            </View>
            <Button title="delete" />
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
        textAlign: 'right',
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 20,
        marginTop: 5
    },
    cardHeader: {
        // backgroundColor: 'red',
        // marginHorizontal: 5,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        textAlign: 'left'
    }
})
export default Settings