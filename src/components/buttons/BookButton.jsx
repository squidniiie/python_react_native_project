import { View, Text, Pressable, StyleSheet, Animated } from 'react-native'
import React, { useRef, useEffect } from 'react'


const BookButton = ({ text }) => {
    const animatedScale = useRef(new Animated.Value(0)).current
    useEffect(() => {
        animatedScale.setValue(1)
    }, [])
    const buttonHandler = () => {
        animatedScale.setValue(.8)
        Animated.spring(animatedScale, {
            toValue: 1,
            bounciness: 24,
            speed: 10,
            useNativeDriver: true,
        }).start()
    }
    return (
        <Pressable
            onPress={buttonHandler}
        >
            <Animated.View style={[styles.button, { transform: [{ scale: animatedScale }] }]}>
                <Text style={styles.buttonText}>{text}</Text>
            </Animated.View>
        </Pressable>
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
export default BookButton