import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Feather from 'react-native-vector-icons/Feather'
import MessagesScreen from '../screens/messagesscreen/MessagesScreen'
import LoginScreen from '../screens/loginscreen/LoginScreen'
import HomeStack from './HomeStack'
import SettingsStack from './SettingsStack'
import ProfileStack from './ProfileStack'
import ProfileScreen from '../screens/profile/ProfileScreen'
import MessagesStack from './MessagesStack'
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
            <Tab.Screen
                style={{ backgroundColor: 'white', padding: 20 }}
                component={HomeStack} name="Home"
                options={{
                    tabBarIcon: ({ color }) =>
                        (<Feather name='home' color={color} size={28} />),
                }}
            />
            <Tab.Screen component={LoginScreen} name="Log & Reg"
                options={{
                    tabBarIcon: ({ color }) =>
                        (<Feather name='log-in' color={color} size={28} />),
                }} />
            {/* <Tab.Screen component={ProfileScreen} name="Profile"
                options={{
                    tabBarIcon: ({ color }) =>
                        (<Feather name='user' color={color} size={28} />),
                }} /> */}
            <Tab.Screen component={MessagesStack} name="Vendors (messages)"
                options={{
                    tabBarIcon: ({ color }) =>
                        (<Feather name='inbox' color={color} size={28} />),
                }} />
            <Tab.Screen component={SettingsStack} name="Users (Settings)"
                options={{
                    tabBarIcon: ({ color }) =>
                        (<Feather name='users' color={color} size={28} />),
                }} />
        </Tab.Navigator >
    )
}

export default BottomTab