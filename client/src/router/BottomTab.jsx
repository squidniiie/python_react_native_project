import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Homescreen from '../screens/homescreen/HomeScreen'
import HomeStack from './HomeStack'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'
import Profilescreen from '../screens/profile/ProfileScreen'
import MessagesScreen from '../screens/messagesscreen/MessagesScreen'
import SettingsScreen from '../screens/Settings/SettingsScreen'
import LoginScreen from '../screens/loginscreen/LoginScreen'

const Tab = createBottomTabNavigator()
const BottomTab = () => {
    return (
        <Tab.Navigator screenOptions={{
            showLabel: false, headerShown: false,
        }}
        // , inactiveTintColor: '#919fe88c',
        // activeTintColor: '#919fe8',
        // tabBarOptions={{ }}
        >
            {/* <Tab.Screen
                style={{ backgroundColor: 'white', padding: 20 }}
                component={HomeStack} name="Home"
                options={{
                    tabBarIcon: ({ color }) =>
                        (<Entypo name='home' color={color} size={28} />),
                }}
            /> */}
            <Tab.Screen component={Homescreen} name="Home"
                options={{
                    tabBarIcon: ({ color }) =>
                        (<Feather name='home' color={color} size={28} />),
                }} />
            <Tab.Screen component={Profilescreen} name="Profile"
                options={{
                    tabBarIcon: ({ color }) =>
                        (<FontAwesome5 name='user-circle' color={color} size={28} />),
                }} />
            <Tab.Screen component={MessagesScreen} name="Messages"
                options={{
                    tabBarIcon: ({ color }) =>
                        (<Feather name='inbox' color={color} size={28} />),
                }} />
            <Tab.Screen component={SettingsScreen} name="Settings"
                options={{
                    tabBarIcon: ({ color }) =>
                        (<Entypo name='menu' color={color} size={28} />),
                }} />
            <Tab.Screen component={LoginScreen} name="Login"
                options={{
                    tabBarIcon: ({ color }) =>
                        (<Entypo name='login' color={color} size={28} />),
                }} />
        </Tab.Navigator >
    )
}

export default BottomTab