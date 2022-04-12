import { Text, StyleSheet, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-virtualized-view';
import Header from '../components/header/Header'
import VendorsList from '../components/vendors/VendorsList';

const MessagesScreen = ({ navigation }) => {
    return (
        <View>
            <ScrollView
                showsVerticalScrollIndicator={false} >
                <Header />
                <Text style={styles.title}>Shapers Near You</Text>
                <VendorsList navigation={navigation}
                />
            </ScrollView>
        </View>
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