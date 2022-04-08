import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import UsersScreen from '../screens/UsersScreen'
import EditForm from '../components/profile/EditForm'
import ProfileScreen from '../screens/ProfileScreen'
const Users = createStackNavigator()
const UsersStack = () => {

    return (
        <Users.Navigator
            screenOptions={{ headerShown: false }}
        >
            <Users.Screen component={UsersScreen} name="UsersScreen" />
            <Users.Screen component={ProfileScreen} name="ProfileScreen" />
            <Users.Screen component={EditForm} name="EditForm" />
        </Users.Navigator>
    )
}
export default UsersStack

