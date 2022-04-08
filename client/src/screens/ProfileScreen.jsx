import { Pressable, ScrollView, Text, StyleSheet, View } from 'react-native'
import React from 'react'
import Profile from '../components/profile/Profile'
import Header from '../components/header/Header'


const ProfileScreen = ({ navigation, route }) => {
    const {
        first_name,
        last_name,
        email,
        location
    } = route.params
    console.log("Route params", route.params)
    // console.log("ProfileScreen successfully passed user data", route.params)
    // console.log("ProfileScreen item is undefined", item)
    return (

        <ScrollView showsVerticalScrollIndicator={false}>
            <Header />
            <Profile
                route={route}
                navigation={navigation}
                first_name={first_name} last_name={last_name} email={email} location={location}
            />
            <Pressable
                style={styles.button}
                onPress={() => navigation.push('Login')}>
                <Text
                    style={styles.buttonText}
                >Register</Text>
            </Pressable>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: 'turquoise',
        padding: 8,
        borderRadius: 20,
        marginVertical: 10,
        alignItems: 'center',
    },
    buttonText: {
        textAlign: 'center',
        justifyContent: 'center',
        color: 'white',
        fontWeight: '700'
    }
})
export default ProfileScreen