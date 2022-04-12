import { FlatList, View, Button, StyleSheet, Text, ActivityIndicator, RefreshControl, Image, ImageBackground, Pressable } from 'react-native'
import { ScrollView } from 'react-native-virtualized-view'
import React, { useState, useEffect } from 'react'
import Header from '../components/header/Header'
import Dashboard from '../components/home/Dashboard'
import { AuthContext } from '../AuthContext'
import SubHeader from '../components/header/SubHeader'
import spots from '../data/spots'
import profilePic from '../assets/profilePic.jpg'
import PostForm from '../components/home/PostForm'


const background = { uri: "https://static.vecteezy.com/system/resources/previews/003/456/895/non_2x/bright-holographic-background-illustration-free-vector.jpg" }
// const image = { uri: 'https://pagesix.com/wp-content/uploads/sites/3/2022/04/will-smith-agents-clash-04.jpg' }

const HomeScreen = ({ navigation }) => {
    const profileImage = require('../assets/profilePic.jpg')
    const { user, setUser } = React.useContext(AuthContext)
    // setUser({})
    console.log(user)
    const [userData, setUserData] = useState({});
    const [Refreshing, setRefreshing] = useState(false);
    const [isLoading, setLoading] = useState(true);


    const signInHandler = () => {
        fetch("http:127.0.0.1:5000/home", { method: 'GET' })
            .then(res => res.json())
            .then(res => {
                console.log("This is the res", res)
                setUserData(res['User'])
            })
            .catch((error) => {
                console.log(error)
                alert(error)
            })
            .finally(() => setLoading(false))
    }
    useEffect(() => {
        signInHandler()
    }, [])
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        signInHandler();
        setTimeout(() => {
            setRefreshing(false)
        }, 1000)
    }, [Refreshing]);

    const logOut = () => {
        fetch("http:127.0.0.1:5000/logout", { method: 'GET' })
            .then(res => {
                console.log("Signed Out", userData.first_name)
                navigation.navigate('LoginScreen')
            })
            .catch((error) => console.log(error))
            .finally(() => setLoading(false))
    }
    return (

        <ScrollView
            refreshControl={<RefreshControl
                refreshing={Refreshing}
                onRefresh={onRefresh} />}
            overScrollMode='touch'
            showsVerticalScrollIndicator={false}>
            <Header />
            <SubHeader />
            <View
            //  style={{ backgroundColor: 'white' }}
            >
                {isLoading ? (<ActivityIndicator />) : (
                    <ImageBackground
                        imageStyle={{ opacity: 0.8, }}
                        source={background} resizeMode='cover' style={styles.container}
                    >
                        {userData ?
                            <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'space-evenly' }}>
                                <View>
                                    <Image style={styles.profile} source={profileImage} />
                                </View>
                                <View style={{
                                    flexDirection: 'column',
                                    //  backgroundColor: 'blue'
                                }}>
                                    <Text style={styles.heading}>Welcome Back, {userData.first_name}</Text>
                                    <Text style={styles.description}>of {userData.location}</Text>
                                    <Pressable
                                        style={{ backgroundColor: '#Ff5d21', borderRadius: 25, paddingHorizontal: 30, paddingVertical: 10, margin: 10 }}
                                        onPress={() => {
                                            logOut()
                                            console.log("logged out", userData.id)
                                        }}>
                                        <Text style={styles.description}>Log Out</Text>
                                    </Pressable>
                                </View>
                            </View>
                            :
                            <Text>Loading...</Text>}
                        <PostForm />
                        <View>
                            <Text style={styles.title}>SEE YOUR PAST REPAIRS</Text>
                            <FlatList
                                style={styles.list}
                                contentContainerStyle={{
                                    flexGrow: 1
                                }}
                                refreshing={isLoading}
                                onRefresh={signInHandler}
                                data={spots}
                                horizontal={true}
                                renderItem={({ item }) => <Dashboard item={item}
                                />}
                            />
                        </View>
                    </ImageBackground>
                )}
                <View style={styles.form}>
                    <Text style={{ marginHorizontal: 15, fontWeight: 'bold', fontSize: 18, color: 'grey' }}>SEE YOUR OPEN REPAIRS</Text>

                </View>
            </View>
        </ScrollView>

    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: background,
        height: '97%',
    },
    list: {
        paddingVertical: 10,
        position: 'absolute',
        top: 10,
    },
    heading: {
        fontSize: 26,
        fontWeight: 'bold',
        paddingHorizontal: 15,
        // paddingTop: 10,
        color: 'white',
        textAlign: 'right',
    },
    description: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingHorizontal: 15,
        color: 'white',
        textAlign: 'right',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingHorizontal: 15,
        color: 'white'
    },
    form: {
        position: 'absolute',
        // backgroundColor: 'blue',
        top: 610,
        width: '100%',
    },
    profile: {
        width: 70,
        height: 70,
        borderRadius: 70 / 2,
        borderWidth: 2,
        borderColor: 'white',
        marginHorizontal: 10,
    }
    // shadow: {
    //     shadowColor: "#000000",
    //     shadowOpacity: 0.3,
    //     shadowRadius: 12,
    //     shadowOffset: {
    //         height: 1,
    //         width: 1
    //     }
    // }
})
export default HomeScreen