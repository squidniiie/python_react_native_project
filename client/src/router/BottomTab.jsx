import { StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Feather from 'react-native-vector-icons/Feather'
import VendorsStack from './VendorsStack'
import LoginScreen from '../screens/LoginScreen'
import HomeStack from './HomeStack'
import UsersStack from './UsersStack'
import ProfileStack from './ProfileStack'
import HomeScreen from '../screens/HomeScreen'
import MessagesScreen from '../screens/MessagesScreen'
import ProfileScreen from '../screens/ProfileScreen'
import UsersScreen from '../screens/UsersScreen'
import LoginStack from './LoginStack'
const Tab = createBottomTabNavigator()
const BottomTab = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                showLabel: false, headerShown: false,
                tabBarStyle: {
                    height: 70,
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    backgroundColor: 'white',
                    shadowColor: '#000',
                    shadowOffset: {
                        width: 0,
                        height: 1,
                    },
                    shadowOpacity: 0.4,
                    shadowRadius: 8,
                    elevation: 5,
                },
                tabBarIconStyle: {
                    marginTop: 10,
                },
                tabBarShowLabel: false,
                tabBarActiveTintColor: 'red',
            }}
        >
            <Tab.Screen
                // style={{ backgroundColor: 'white', padding: 20 }}
                component={HomeStack} name="Home"
                options={{
                    tabBarIcon: ({ color }) =>
                        (<Feather name='home' color={color} size={28} />),
                }}
            />
            <Tab.Screen component={LoginStack} name="Log & Reg"
                options={{
                    tabBarIcon: ({ color }) =>
                        (<Feather name='log-in' color={color} size={28} />),
                }} />
            <Tab.Screen component={VendorsStack} name="Vendors"
                options={{
                    tabBarIcon: ({ color }) =>
                        (<Feather name='inbox' color={color} size={28} />),
                }} />
            <Tab.Screen component={UsersStack} name="Users"
                options={{
                    tabBarIcon: ({ color }) =>
                        (<Feather name='users' color={color} size={28} />),
                }} />
            <Tab.Screen component={ProfileStack} name="Profile"
                options={{
                    tabBarIcon: ({ color }) =>
                        (<Feather name='user' color={color} size={28} />),
                }} />
        </Tab.Navigator >
    )
}

export default BottomTab