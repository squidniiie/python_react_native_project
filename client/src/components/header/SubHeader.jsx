import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native'
import React, { useState } from 'react'
import Button from '../buttons/Button'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// const Tab = createBottomTabNavigator
const SubHeader = () => {
    return (
        // <Tab.Navigator>

        // </Tab.Navigator>
        <View>
            <ScrollView
                style={styles.container}
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                horizontal={true}
            >
                <Button style={styles.button}
                    text="Longboard" />
                <Button style={styles.button}
                    text="Hawaii" />
                <Button style={styles.button}
                    text="Point Breaks" />
                <Button style={styles.button}
                    text="Shortboard" />
                <Button style={styles.button}
                    text="California" />
                <Button style={styles.button}
                    text="Locales" />
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderBottomColor: '#f5f5f5',
        borderBottomWidth: 3,
        padding: 10,
        flexDirection: 'row',
        // width: Dimensions.get('window').width
    },
    button: {


    }
    // shadow: {
    //     marginTop: 5,
    //     shadowColor: '#171717',
    //     shadowOffset: { width: 4, height: 4 },
    //     shadowOpacity: 0.1,
    //     shadowRadius: 8,
    // }
})
export default SubHeader