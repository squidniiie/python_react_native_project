import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import BottomTab from './BottomTab'
import React from 'react'
import HomeStack from './HomeStack'
import ProfileStack from './ProfileStack'
import UsersStack from './UsersStack'
import VendorsStack from './VendorsStack'
const Stack = createStackNavigator()
const Router = () => {
    return (
        <NavigationContainer
        >
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen component={BottomTab} name="HomeTabs" />
                <Stack.Screen component={HomeStack} name="Home" />
                <Stack.Screen component={UsersStack} name="UsersStack" />
                <Stack.Screen component={VendorsStack} name="VendorsStack" />
                <Stack.Screen component={ProfileStack} name="ProfileStack" />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
// in the router we need a SignInStack and SignedOutStack. This is how we will display the default screen as sign in or register and once authenticated we will display the HomeStack.: 
// const SignInStack = () => (
//     <NavigationContainer>
//         <Stack.Navigator
//             initialRouteName='LoginScreen'
//             screenOptions={screenOptions}>
//             <Stack.Screen name='HomeScreen' component={HomeScreen} />
//             <Stack.Screen name='PostScreen' component={PostScreen} />
//             <Stack.Screen name='LoginScreen' component={LoginScreen} />
//             <Stack.Screen name='SignUpScreen' component={SignUpScreen} />
//         </Stack.Navigator>
//     </NavigationContainer>
// )

// const SignedOutStack = () => (
//     <NavigationContainer>
//         <Stack.Navigator
//             initialRouteName='LoginScreen'
//             screenOptions={screenOptions}
//         >
//             <Stack.Screen name='LoginScreen' component={LoginScreen} />
//             <Stack.Screen name='SignUpScreen' component={SignUpScreen} />
//         </Stack.Navigator>
//     </NavigationContainer>
// )
// export { SignInStack, SignedOutStack }

// then we need an AuthNavigation that will handle the two functions in the router. This is an example using Firebase Auth: 
// const AuthNavigation = () => {
//     const [currentUser, setCurrentUser] = useState(null)
//     const userHandler = user =>
//         user ? setCurrentUser(user) : setCurrentUser(null)

//     useEffect(() =>
//         auth.onAuthStateChanged(user => userHandler(user))
//         , [])
//     return <>{currentUser ? <SignInStack /> : <SignedOutStack />}</>
// }
// export default AuthNavigation
export default Router