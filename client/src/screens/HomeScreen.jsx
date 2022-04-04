import { FlatList, View, SafeAreaView, StyleSheet, Text, Button } from 'react-native'
import { ScrollView } from 'react-native-virtualized-view'
import React, {useState, useEffect} from 'react'
import Header from '../components/header/Header'
import Dashboard from '../components/home/Dashboard'
import spots from '../data/spots'
import SubHeader from '../components/header/SubHeader'
import BottomTab from '../router/BottomTab'

const HomeScreen = ({ }) => {

    const [isLoading, setLoading] = useState(false);
    const [user, setUser] = useState({});
    
    const loadData = () => {
        fetch("https://a955-76-175-74-35.ngrok.io/home", { method: 'GET' })
            .then(res => res.json())
            .then(res => {
                console.log(res)
                setUser(res['User'])
                // setLoading(!isLoading)
            })
            .catch((error) => {
                console.log(error)
                alert(error)
            })
    }
    useEffect(() => {
        loadData()
    }, [])

    const logOut = () => {
        fetch("https://a955-76-175-74-35.ngrok.io/logout", { method: 'GET' })
            .then(res => console.log("Signed Out!"))
            .catch((error) => console.log(error))
    }

    return (
        <View>
            <Header />
            <SubHeader />
            { user ? 
            <Text> Hi {user.first_name}</Text> :
            <Text> Loading </Text>
            }
            <Button title='Logout' onPress={() => logOut()}/>
        </View>
    )
}
// const styles = StyleSheet.create({
//     shadow: {
//         shadowColor: "#000000",
//         shadowOpacity: 0.3,
//         shadowRadius: 12,
//         shadowOffset: {
//             height: 1,
//             width: 1
//         }
//     }
// })
export default HomeScreen