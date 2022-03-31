
import { View, ActivityIndicator, FlatList, SafeAreaView, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import Header from "../components/header/Header"
import Users from '../components/Users/Users';


const UsersScreen = ({ navigation }) => {
    // console.log('SettingScreen successful', navigation)
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    
    const loadData = () => {
        fetch("https://a955-76-175-74-35.ngrok.io/getusers", { method: 'GET' })
            .then(res => res.json())
            .then(res => {
                setData(res.users)
            })
            .catch((error) => {
                console.log(error)
                alert(error)
            })
            .finally(() => setLoading(false))
    }
    useEffect(() => {
        loadData()
    }, [])
    return (
        <View>
            <Header />
            <Text style={{ fontSize: 28, fontWeight: '700', textAlign: 'center', marginTop: 8 }}>See all Users</Text>
            {isLoading ? (<ActivityIndicator />) : (
                <FlatList
                    contentContainerStyle={{
                        flexGrow: 1
                    }}
                    keyExtractor={item => item.id}
                    onRefresh={loadData}
                    refreshing={isLoading}
                    data={data}
                    renderItem={({ item }) =>
                        < Users item={item} navigation={navigation} />
                    }
                    showsVerticalScrollIndicator={false}
                />
            )}
        </View >
    )
}
export default UsersScreen