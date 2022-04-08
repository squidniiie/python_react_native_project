// import { NavigationContainer } from '@react-navigation/native'
// import { createStackNavigator } from '@react-navigation/stack'
// import BottomTab from './BottomTab'
// import React, { useState, useEffect } from 'react'
// import HomeStack from './HomeStack'
// import ProfileStack from './ProfileStack'
// import UsersStack from './UsersStack'
// import VendorsStack from './VendorsStack'
// import { AuthContext } from '../../src/AuthContext'
// import { View, ActivityIndicator } from 'react-native';
// const Stack = createStackNavigator()
// const Router = () => {
// const [isLoading, setIsLoading] = useState(true);
// const [userToken, setUserToken] = useState(null);

// const initialLoginState = {
//     isLoading: true,
//     email: null,
//     userId: null,
// }
// const loginReducer = (prevState, action) => {
//     switch (action.type) {
//         case 'RETRIEVE_TOKEN':
//             return {
//                 ...prevState,
//                 userToken: action.token,
//                 isLoading: false,

//             };
//         case 'LOGIN':
//             return {
//                 ...prevState,
//                 email: action.id,
//                 userToken: action.token,
//                 isLoading: false,
//             };
//         case 'LOGOUT':
//             return {
//                 ...prevState,
//                 email: null,
//                 userToken: null,
//                 isLoading: false,
//             };
//         case 'REGISTER':
//             return {
//                 ...prevState,
//                 email: action.id,
//                 userToken: action.token,
//                 isLoading: false,
//             };
//     }
// }
// const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);
// const authContext = React.useMemo(() => ({
//     signIn: () => {
//         // email, password
//         setUserToken('userToken');
//         setIsLoading(false);
//         // console.log("Sign in with email and password")
//         // let userToken;
//         // userToken = 'userToken';
//         // email = null
//         // if (email === 'email' && password === 'password') {
//         //     dispatch({ type: 'LOGIN', id: email, token: 'userToken' });
//         // }
//         // console.log("userToken",userToken)
//         // return userToken;
//     },
//     signOut: () => {
//         setUserToken(null);
//         setIsLoading(false);
//         // dispatch({ type: 'LOGOUT' });
//     },
//     signUp: () => {
//         setUserToken('userToken');
//         setIsLoading(false);
//     },
// }), []);
// useEffect(() => {
//     setTimeout(() => {
//         setIsLoading(false);
//         // let userToken;
//         // userToken = 'userToken';
//         // console.log("userToken",userToken)
//         // dispatch({ type: "REGISTER", token: "userToken" })
//     }, 1000);
// }, []);
// if (isLoading) {
//     return (
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//             <ActivityIndicator size="large" color="tomato" />
//         </View>)
// }
// return (
//     // <AuthContext.Provider value={authContext}>

//     <NavigationContainer>
//         {/* {userToken == null ? ( */}
//         <Stack.Navigator
//             // initialRouteName='LoginScreen'
//             screenOptions={{ headerShown: false }}>
//             <Stack.Screen component={BottomTab} name="HomeTabs" />
//             <Stack.Screen component={HomeStack} name="Home" />
//             <Stack.Screen component={UsersStack} name="UsersStack" />
//             <Stack.Screen component={VendorsStack} name="VendorsStack" />
//             <Stack.Screen component={ProfileStack} name="ProfileStack" />
//         </Stack.Navigator>
//         {/* ) : */}
//         {/* <Stack.Navigator>
//             <Stack.Screen component={ProfileStack} name="Profile" />
//         </Stack.Navigator> */}
//         {/* } */}
//     </NavigationContainer>
// )
// }
{/* </AuthContext.Provider> */ }