
import { View, Text, StyleSheet, ActivityIndicator, FlatList, Pressable, Image, SafeAreaView, Button } from 'react-native'
import React, { useState, useEffect } from 'react'


const SettingsScreen = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    // const [photos, setPhotos] = useState([]);
    useEffect(() => {
        fetch("http:127.0.0.1:5000/getusers", { method: 'GET' })
            .then(res => res.json())
            .then(res => {
                setData(res.users)
                // setPhotos(res.photos)
                console.log(res.users)
            })
            .catch((error) => {
                console.log(error)
                alert(error)
            })
            .finally(() => setLoading(false))
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <View>
                {isLoading ? (<ActivityIndicator />) : (
                    <FlatList
                        contentContainerStyle={{
                            flexGrow: 1
                        }}
                        keyExtractor={item => `${item.id}`}
                        data={data}
                        renderItem={({ item, index }) => (
                            <Pressable style={[styles.card, styles.shadow]}>
                                <View
                                    style={styles.cardHeader}
                                >
                                    <Text style={styles.name}>{item.first_name}</Text>
                                    {/* <Image style={styles.image} source={{ uri: item.imageUrl }} /> */}
                                </View>
                                <View style={{ flexDirection: 'column' }}>
                                    {/* <Text style={{ textAlign: 'right' }}>{item.description}</Text> */}
                                    <Text style={{ textAlign: 'right' }}>{item.location}</Text>
                                </View>
                                <View style={{ marginTop: 5 }}>
                                    <Text>*Putting an image carousel here with horizontal scroll*</Text>
                                </View>
                                <Button title='See all users' />
                            </Pressable>
                        )}

                    />
                )}
            </View>
        </SafeAreaView>
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

export default SettingsScreen