import { View, Text } from 'react-native'
import HomeScreen from '../screens/homescreen/HomeScreen'
import React, { useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Header from '../components/header/Header'


const Stack = createStackNavigator()
const HomeStack = () => {
    const [searchValue, setSearchValue] = useState('');
    return (
        <Stack.Navigator
            screenOptions={{
                header: () =>
                    <Header searchValue={searchValue}
                        setSearchValue={setSearchValue} />
            }}
        >
            <Stack.Screen name="HomeScreen" options={{ title: 'Home' }}>
                {() => <HomeScreen searchValue={searchValue} />}
            </Stack.Screen>
            {/* <Stack.Screen component={Dashboard} name="Dashboard" /> */}
        </Stack.Navigator>


    )
}

export default HomeStack