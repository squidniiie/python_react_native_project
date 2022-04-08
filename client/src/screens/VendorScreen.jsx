import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Header from '../components/header/Header'

const VendorScreen = (item) => {
    const vendor = item.route.params
    // console.log("VendorsScreen:", navigation)
    // console.log("VendorsScreen Item:", vendor.imageUrl)
    return (
        <View>
            <Header />
            <View style={[styles.card, styles.shadow]}>
                <View style={styles.container}>
                    <View>
                        <Image style={styles.image} source={{ uri: vendor.imageUrl }} />
                    </View>
                    <View style={styles.titleBox}>
                        <Text style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 18 }}>
                            Hey I'm {vendor.name}!</Text>
                        <Text>{vendor.location}</Text>
                        <Text>{vendor.description}</Text>
                    </View>
                </View>
            </View>
            <View style={[styles.card, styles.shadow]}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>My Collection</Text>
                <Text>adding an image carousel</Text>
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
export default VendorScreen