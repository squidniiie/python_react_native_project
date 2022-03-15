import { SafeAreaView, View, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather'
const Header = () => {
    return (
        <SafeAreaView style={{ backgroundColor: 'white' }}>
            <View style={styles.container}>
                <TextInput
                    style={{ height: 20, paddingLeft: 5, fontWeight: '500' }}
                    placeholder='Search...'
                />
                <Feather name='search' size={24} style={{ color: 'gray' }} />
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        marginHorizontal: 12,
        marginVertical: 8,
        padding: 8,
        backgroundColor: '#f5f5f5',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 20
    }
})

export default Header
