
import { View, ActivityIndicator, FlatList, SafeAreaView, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import Header from "../../components/header/Header"
import Settings from '../../components/settings/Settings';


const SettingsScreen = ({ navigation }) => {
    // console.log('SettingScreen successful', navigation)
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const loadData = () => {
        fetch("http:127.0.0.1:5000/getusers", { method: 'GET' })
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
                        < Settings item={item} navigation={navigation} />
                    }
                    showsVerticalScrollIndicator={false}
                />
            )}
        </View >
    )
}
export default SettingsScreen