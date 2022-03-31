import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Feather from 'react-native-vector-icons/Feather'
import VendorsStack from './VendorsStack'
import LoginScreen from '../screens/LoginScreen'
import HomeStack from './HomeStack'
import UsersStack from './UsersStack'
// import ProfileStack from './ProfileStack'
// import ProfileScreen from '../screens/profile/ProfileScreen'

const Tab = createBottomTabNavigator()
const BottomTab = () => {
    return (
        <Tab.Navigator screenOptions={{
            showLabel: false, headerShown: false,
        }}
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
        </Tab.Navigator >
    )
}

export default BottomTab