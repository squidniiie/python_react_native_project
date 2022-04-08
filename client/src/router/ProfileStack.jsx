
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ProfileScreen from '../screens/ProfileScreen'
import EditForm from '../components/profile/EditForm'
const Profile = createStackNavigator()
const ProfileStack = () => {

    return (
        <Profile.Group>
            <Profile.Screen component={ProfileScreen} name="ProfileScreen" />
            <Profile.Screen component={EditForm} name="EditForm" />
        </Profile.Group>
    )
}
export default ProfileStack