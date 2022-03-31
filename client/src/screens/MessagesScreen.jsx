import { Text, View, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-virtualized-view';
import Header from '../components/header/Header'
import VendorsList from '../components/Vendors/VendorsList';

const MessagesScreen = ({ navigation }) => {
    return (
        <SafeAreaView>
            <ScrollView
                showsVerticalScrollIndicator={false} >
                <Header />
                <Text style={styles.title}>You're in Luck!</Text>
                <VendorsList navigation={navigation}
                />
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 28,
        textAlign: 'center',
        marginTop: 5
    },
})
export default MessagesScreen