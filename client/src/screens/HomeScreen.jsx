import { FlatList, View, Button, StyleSheet, Text, ActivityIndicator, RefreshControl, Image, ImageBackground } from 'react-native'
import { ScrollView } from 'react-native-virtualized-view'
import React, { useState, useEffect } from 'react'
import Header from '../components/header/Header'
import Dashboard from '../components/home/Dashboard'
import { AuthContext } from '../AuthContext'
import SubHeader from '../components/header/SubHeader'
import spots from '../data/spots'
import profilePic from '../assets/profilePic.jpg'
// import UserRepairs from '../components/home/UserRepairs'

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
            showsVerticalScrollIndicator={false}>
            <Header />
            <SubHeader />
            <ScrollView style={{ backgroundColor: 'white' }}>
                {isLoading ? (<ActivityIndicator />) : (
                    <View>
                        <ImageBackground
                            imageStyle={{ opacity: 0.8, }}
                            source={background} resizeMode='cover' style={styles.container}
                        >
                            {userData ?
                                <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'space-evenly' }}>
                                    <View>
                                        <Image style={styles.profile} source={profileImage} />
                                    </View>
                                    <View
                                    // style={{ marginHorizontal: 15, backgroundColor: 'red' }}
                                    >
                                        <Text style={styles.heading}>Welcome Back, {userData.first_name}</Text>
                                        <Text style={styles.description}>of {userData.location}</Text>
                                    </View>
                                </View>
                                :
                                <Text>Loading...</Text>}
                            <View>
                                <Text style={styles.title}>SEE YOUR FAVORITES</Text>
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
                        {/* <FlatList
                            style={styles.secondList}
                            contentContainerStyle={{
                                flexGrow: 1
                            }}
                            refreshing={isLoading}
                            onRefresh={signInHandler}
                            data={spots}
                            horizontal={true}
                            renderItem={({ item }) => <UserRepairs item={item}
                            />}
                        /> */}
                    </View>
                )}
            </ScrollView>
            <View style={styles.button}>
                <Button
                    title="Sign out"
                    onPress={() => {
                        logOut()
                        console.log("logged out", userData.id)
                    }} />
            </View>
        </ScrollView >
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: background,
        height: '85%',
    },
    list: {
        paddingVertical: 10,
        position: 'absolute',
        top: 20,
        // backgroundColor: 'white'
    },
    // secondList: {
    //     paddingTop: 200,
    //     position: 'absolute',
    //     // bottom: 0,
    //     top: 300,
    // },
    heading: {
        fontSize: 26,
        fontWeight: 'bold',
        paddingHorizontal: 15,
        paddingTop: 10,
        color: 'white',
        textAlign: 'right',
        // letterSpacing: 3,
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
        paddingTop: 20,
        // paddingVertical: 5,
        color: 'white'
    },
    button: {
        height: 150,
        backgroundColor: '#fff',
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