import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import React, { useState, useEffect } from 'react'


const Posts = () => {
    const [data, setData] = useState([]);
    const loadData = () => {
        fetch("http:127.0.0.1:5000/posts/all", { method: 'GET' })
            .then(res => res.json())
            .then(res => {
                setData(res.posts)
                console.log(data)
            })
            .catch((error) => {
                console.log(error)
                alert(error)
            })
    }
    useEffect(() => {
        loadData()
    }, [])

    return (
        <View>
            <Text style={styles.heading}>SEE YOUR PAST REPAIRS</Text>
            <FlatList
                data={data}
                horizontal={true}
                contentContainerStyle={{
                    flexGrow: 1
                }}
                renderItem={({ item }) => (
                    <View style={[styles.card, styles.shadow]}>
                        <Image
                            style={styles.image}
                            source={{ uri: item.image }} />
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.textbox}>{item.description}</Text>

                    </View>
                )}
                keyExtractor={item => item.id}
            />
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
        height: '95%',
        // marginBottom: 15,
        borderRadius: 10,
    },
    // background: {
    //     width: 270,
    //     height: 65,
    //     marginTop: 5,
    //     paddingVertical: 25,
    // },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 22,
        letterSpacing: 3,
        textTransform: 'uppercase',
        paddingTop: 5
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 15,
        paddingHorizontal: 15,
        color: 'white'
    },
    textbox: {
        marginTop: 10,
        // flexDirection: 'row',
        textAlign: 'center',
    }
})
export default Posts