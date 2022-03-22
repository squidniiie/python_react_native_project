import { Pressable, ScrollView, Text, StyleSheet, View } from 'react-native'
import React from 'react'
import Profile from '../../components/profile/Profile'
import BottomTab from '../../router/BottomTab'

const ProfileScreen = ({ navigation, route, item }) => {
    const {
        first_name,
        last_name,
        email,
        location
    } = route.params
    // console.log("ProfileScreen:", route.params)
    // console.log("ProfileScreen: ", navigation)
    return (

        <ScrollView showsVerticalScrollIndicator={false}>
            <Profile
                //  route={route} 
                item={item} navigation={navigation}
                first_name={first_name} last_name={last_name} email={email} location={location}
            />
            <Pressable
                style={styles.button}
                onPress={() => navigation.navigate('Login')}>
                <Text
                    style={styles.buttonText}
                >Register</Text>
                {/* //  containerStyles={{ backgroundColor: '#919fe88c' }} */}
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