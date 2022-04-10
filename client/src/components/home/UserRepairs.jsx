import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
const image = { uri: "https://www.onlygfx.com/wp-content/uploads/2017/07/paint-brush-stroke-7-15-1024x244.png" }
const UserRepairs = ({ item }) => {
    return (
        <View>
            <TouchableOpacity
                onPress={() => {
                    onClick(card)
                }}
                style={[styles.card, styles.shadow]}>
                <Image
                    style={styles.image}
                    source={{ uri: item.image }} />
                <ImageBackground
                    style={styles.background}
                    source={image}
                >
                    <Text
                        numberOfLines={1}
                        adjustsFontSizeToFit
                        style={[styles.title, { color: item.id % 2 === 0 ? 'black' : 'white' }]}
                    >
                        {item.name}
                    </Text>
                </ImageBackground>
                <View style={styles.textbox}>
                    <Text style={{ color: 'black', textAlign: 'center' }}>
                        {item.location}
                    </Text>
                    <Text style={{ color: 'black', textAlign: 'center' }}>
                        {item.state}
                    </Text>
                    <Text style={{ color: 'black', textAlign: 'center' }}>
                        {item.boardType}
                    </Text>
                </View>
            </TouchableOpacity>
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
        justifyContent: 'center',
        width: 300,
        height: 350,
    },
    shadow: {
        shadowColor: '#171717',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },
    image: {
        width: '100%',
        height: '75%',
        // height: 280,
        borderRadius: 10,
    },
    background: {
        width: 270,
        height: 65,
        marginTop: 5,
        paddingVertical: 25,
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 22,
        letterSpacing: 3,
        textTransform: 'uppercase'
    },
    textbox: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    }
})
export default UserRepairs