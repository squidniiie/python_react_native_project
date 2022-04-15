import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import BottomTab from './BottomTab'
import React, { useEffect } from 'react'
import LoginScreen from "../screens/LoginScreen"
import { AuthContext } from '../AuthContext'
import Splash from './Splash'
import UsersScreen from '../screens/UsersScreen'
import MessagesScreen from '../screens/MessagesScreen'
import ProfileScreen from '../screens/ProfileScreen'
import VendorScreen from '../screens/VendorScreen'

const Stack = createStackNavigator()

const SignInStack = ({ navigation }) => (
    <Stack.Navigator
        initialRouteName='HomeScreen'
        screenOptions={{ headerShown: false }}>
        <Stack.Screen component={BottomTab} name="HomeTabs" navigation={navigation} />
        <Stack.Screen component={UsersScreen} name="UsersScreen" />
        <Stack.Screen component={MessagesScreen} name="MessagesScreen" />
        <Stack.Screen component={ProfileScreen} name="ProfileScreen" />
        <Stack.Screen component={VendorScreen} name="VendorScreen" />
        <Stack.Screen component={LoginScreen} name="LoginScreen" />
    </Stack.Navigator>
)

const SignOutStack = () => (
    <Stack.Navigator initialRouteName='LoginScreen' screenOptions={{ headerShown: false }}>
        <Stack.Screen component={LoginScreen} name="LoginScreen" />
    </Stack.Navigator>
)

const Router = () => {
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
                console.log("This is the res from the router", res)
                setUserToken(res.user.id)
                console.log("Setting user from router", userToken)
            })
            .catch((error) => {
                console.log(error)
                alert(error)
            })
            .finally(() => setIsLoading(false))
    }
    useEffect(() => {
        signInHandler()
        console.log("First: userToken is undefined from router", userToken)
    }, [])
    if (isLoading) {
        return <Splash />
    }
    return (
        <AuthContext.Provider value={authContext}>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    {userToken ? (
                        <Stack.Screen component={SignInStack} name="SignIn" />
                    ) : (
                        <Stack.Screen component={SignOutStack} name="SignOut" />)
                    }
                </Stack.Navigator>
            </NavigationContainer>
        </AuthContext.Provider>
    )
}
export default Router
