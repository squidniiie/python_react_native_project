import { FlatList, View, Button, StyleSheet, Text, ActivityIndicator, RefreshControl } from 'react-native'
import { ScrollView } from 'react-native-virtualized-view'
import React, { useState, useEffect } from 'react'
import Header from '../components/header/Header'
import Dashboard from '../components/home/Dashboard'
import { AuthContext } from '../AuthContext'
import SubHeader from '../components/header/SubHeader'
import spots from '../data/spots'


const HomeScreen = ({ navigation }) => {
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
            <ScrollView
            >
                <Header />
                <SubHeader />
                {/* <ScrollView showsVerticalScrollIndicator={false}> */}
                {isLoading ? (<ActivityIndicator />) : (
                    <View>
                        {userData ?
                            <View>
                                <Text style={styles.title}>Hello, {userData.first_name}</Text>
                            </View>
                            :
                            <Text>Loading...</Text>}
                        <Button title="Sign out"
                            onPress={() => {
                                logOut()
                                console.log("logged out", userData.id)
                            }} />
                        <FlatList
                            contentContainerStyle={{
                                flexGrow: 1
                            }}
                            refreshing={isLoading}
                            onRefresh={signInHandler}
                            data={spots}
                            renderItem={({ item }) => <Dashboard item={item} />}
                        />
                    </View>
                )}
                {/* </ScrollView> */}
            </ScrollView>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        paddingHorizontal: 15,
        paddingVertical: 5,
        textAlign: 'center',
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