import { FlatList, View, SafeAreaView, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-virtualized-view'
import React from 'react'
import Header from '../components/header/Header'
import Dashboard from '../components/home/Dashboard'
import spots from '../data/spots'
import SubHeader from '../components/header/SubHeader'

const HomeScreen = () => {
    return (
        <View>
            <Header />
            <SubHeader />
            <ScrollView showsVerticalScrollIndicator={false}>
                <FlatList
                    data={spots}
                    renderItem={({ item }) =>
                        <Dashboard item={item} />}

                />
            </ScrollView>
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