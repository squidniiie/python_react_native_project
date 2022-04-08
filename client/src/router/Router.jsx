import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import BottomTab from './BottomTab'
import React, { useEffect } from 'react'
import HomeStack from './HomeStack'
import ProfileStack from './ProfileStack'
import UsersStack from './UsersStack'
import VendorsStack from './VendorsStack'
import LoginScreen from "../screens/LoginScreen"
import { AuthContext } from '../AuthContext'
import Splash from './Splash'
import HomeScreen from '../screens/HomeScreen'
import UsersScreen from '../screens/UsersScreen'
import MessagesScreen from '../screens/MessagesScreen'
import ProfileScreen from '../screens/ProfileScreen'
import LoginStack from './LoginStack'
import VendorScreen from '../screens/VendorScreen'

const SignedIn = createStackNavigator()
// const SignInStack = ({ navigation }) => (
//     <SignedIn.Navigator
//         initialRouteName='LoginScreen'
//         screenOptions={{ headerShown: false }}>
//         <SignedIn.Screen component={BottomTab} name="HomeTabs" />
//         <SignedIn.Screen component={HomeStack} name="HomeStack" navigation={navigation} />
//         <SignedIn.Screen component={UsersStack} name="UsersStack" />
//         <SignedIn.Screen component={VendorsStack} name="VendorsStack" />
//         <SignedIn.Screen component={ProfileStack} name="ProfileStack" />
//         <SignedIn.Screen component={LoginScreen} name="LoginScreen" />
//     </SignedIn.Navigator>
// )
const SignInStack = ({ navigation }) => (
    <SignedIn.Navigator
        initialRouteName='HomeScreen'
        screenOptions={{ headerShown: false }}>
        <SignedIn.Screen component={BottomTab} name="HomeTabs" navigation={navigation} />
        {/* <SignedIn.Screen component={HomeScreen} name="HomeScreen" /> */}
        <SignedIn.Screen component={UsersScreen} name="UsersScreen" />
        <SignedIn.Screen component={MessagesScreen} name="MessagesScreen" />
        <SignedIn.Screen component={ProfileScreen} name="ProfileScreen" />
        <SignedIn.Screen component={VendorScreen} name="VendorScreen" />
        <SignedIn.Screen component={LoginScreen} name="LoginScreen" />
    </SignedIn.Navigator>
)
const SignedOut = createStackNavigator()
const SignOutStack = ({ navigation }) => (
    <SignedOut.Navigator initialRouteName='LoginScreen' screenOptions={{ headerShown: false }}>
        <SignedOut.Screen component={LoginScreen} name="LoginScreen" navigation={navigation} />
    </SignedOut.Navigator>
)
// const Stack = createStackNavigator()
const Router = ({ navigation }) => {
    const [isLoading, setIsLoading] = React.useState(true)
    const [userToken, setUserToken] = React.useState({})

    const authContext = React.useMemo(() => {
        return {
            user: userToken,
            setUser: setUserToken,

            signIn: () => {
                setIsLoading(false)
                setUserToken(userToken)
            },
            signOut: () => {
                setIsLoading(false)
                setUserToken(null)
            },
            signUp: () => {
                setIsLoading(false)
                setUserToken(userToken)
            },
        }
    }, [])
    const signInHandler = () => {
        fetch("http:127.0.0.1:5000/home", { method: 'GET' })
            .then(res => res.json())
            .then(res => {
                console.log("This is the res", res)
                setUserToken(res['User'])
            })
            .catch((error) => {
                console.log(error)
                alert(error)
            })
            .finally(() => setIsLoading(false))
    }
    useEffect(() => {
        console.log("This is the userToken", userToken)
        signInHandler()
    }, [])
    React.useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 3000)
    }, [])
    if (isLoading) {
        console.log("Loading the login from the router")
        return <Splash />
    }
    return (
        <AuthContext.Provider value={authContext}>
            <NavigationContainer>
                {/* <Stack.Navigator> */}
                {userToken ? (
                    <SignInStack component={SignInStack} navigation={navigation} />
                ) : (
                    <SignOutStack component={SignOutStack} navigation={navigation} />)}
                {/* </Stack.Navigator> */}
            </NavigationContainer>
        </AuthContext.Provider>
    )
}
export default Router
