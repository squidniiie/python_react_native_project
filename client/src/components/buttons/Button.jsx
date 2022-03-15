import { View, Text, Pressable } from 'react-native'
import React from 'react'

const Button = ({ text, onPress }) => {
    return (
        <Pressable
            onPress={onPress}>
            <Text style={{ color: '#404040', fontWeight: '600', marginHorizontal: 7, }} >{text}</Text>
        </Pressable>
    )
}

export default Button