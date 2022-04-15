import { FlatList, View, SafeAreaView, StyleSheet, Text, ActivityIndicator, RefreshControl, Image, ImageBackground, Pressable } from 'react-native'
import { ScrollView } from 'react-native-virtualized-view'
import React, { useState, useEffect } from 'react'
import Header from '../components/header/Header'
import Dashboard from '../components/home/Dashboard'
import { AuthContext } from '../AuthContext'
import SubHeader from '../components/header/SubHeader'
import spots from '../data/spots'
import profilePic from '../assets/profilePic.jpg'
import PostForm from '../components/home/PostForm'
import Posts from '../components/home/Posts'
import Feather from 'react-native-vector-icons/Feather'
const background = { uri: "https://static.vecteezy.com/system/resources/previews/003/456/895/non_2x/bright-holographic-background-illustration-free-vector.jpg" }
// const image = { uri: 'https://pagesix.com/wp-content/uploads/sites/3/2022/04/will-smith-agents-clash-04.jpg' }

const HomeScreen = ({ navigation }) => {
    const profileImage = require('../assets/profilePic.jpg')
    const { signOut } = React.useContext(AuthContext)
    // setUser({})
    // console.log(user)
    const [userData, setUserData] = useState({});
    const [Refreshing, setRefreshing] = useState(false);
    const [isLoading, setLoading] = useState(true);

    const signInHandler = () => {
        fetch("http:127.0.0.1:5000/home", { method: 'GET' })
            .then(res => res.json())
            .then(res => {
                console.log("HomeScreen: This is the res", res)
                // setUserData(res['User'])
                setUserData(res.user)
            })
            .catch((error) => {
                console.log("res", error)
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
                signOut()
            })
            .catch((error) => console.log("logout", error))
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
            <View>
                {isLoading ? (<ActivityIndicator />) : (
                    <ImageBackground
                        imageStyle={{ opacity: 0.9, height: '70%', width: '100%' }}
                        source={background} resizeMode='cover' style={styles.container}
                    >
                        {userData ?
                            <View style={{ padding: 10, marginHorizontal: 20 }}>
                                <View style={{ paddingVertical: 5, alignItems: 'center' }}>
                                    <Image style={styles.profile} source={profileImage} />
                                </View>
                                <View style={{ justifyContent: 'center' }}>
                                    <Text style={styles.heading}>Welcome Back</Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={styles.subheading}>{userData.first_name} of {userData.location}</Text>
                                        <Pressable
                                            style={styles.logout}
                                            onPress={() => {
                                                logOut()
                                                console.log("logged out", userData.id)
                                            }}>
                                            <Feather name="log-out" size={16} color="white" />
                                        </Pressable>
                                    </View>
                                    <View
                                        style={{ borderBottomColor: 'white', borderBottomWidth: 1, marginTop: 10, marginBottom: 15 }}>
                                    </View>

                                    <PostForm />
                                </View>
                            </View>
                            :
                            <Text>Loading...</Text>}
                        <Posts />
                    </ImageBackground>
                )}
                <Text style={{ marginHorizontal: 15, fontWeight: 'bold', fontSize: 18, color: 'grey' }}>SEE YOUR OPEN REPAIRS</Text>
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
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: background,
    },
    list: {
        paddingVertical: 10,
    },
    heading: {
        fontSize: 26,
        fontWeight: 'bold',
        paddingHorizontal: 15,
        color: 'white',
        textAlign: 'center',
        textTransform: 'uppercase',
        letterSpacing: 5
    },
    subheading: {
        fontSize: 22,
        fontWeight: 'bold',
        paddingHorizontal: 15,
        color: 'white',
        textAlign: 'center',
    },
    profile: {
        width: 70,
        height: 70,
        borderRadius: 70 / 2,
        borderWidth: 2,
        borderColor: 'white',
        marginHorizontal: 10,
    },
    logout: {
        backgroundColor: '#Ff5d21',
        borderRadius: 25,
        padding: 5,
        // margin: 10,
    },
    description: {
        fontSize: 12,
        fontWeight: 'bold',
        paddingHorizontal: 15,
        color: 'white',
        textAlign: 'right',
    },
})
export default HomeScreen