import { Pressable, ScrollView, Text, StyleSheet } from 'react-native'
import React from 'react'
import Profile from '../../components/profile/Profile'
import Form from '../../components/profile/Form'
import BookButton from '../../components/buttons/BookButton'

const ProfileScreen = (props) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <Profile />
            <Text>Show here the user's preferences and maybe a stacked list to get to their favorited vendors</Text>
            <Pressable
                style={styles.button}
                onPress={() => props.navigation.navigate('Login')}>
                <Text
                    style={styles.buttonText}
                >Register</Text>
                {/* //  containerStyles={{ backgroundColor: '#919fe88c' }} */}
            </Pressable>
            {/* <Pressable>
                <BookButton
                    onPress={() => props.navigation.navigate('Login')}
                    text='Register' />
            </Pressable>

            <Form /> */}
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