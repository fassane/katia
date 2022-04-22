import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SplashScreenOne from '../screens/auth/SplashScreenOne'
import SplashScreenTwo from '../screens/auth/SplashScreenTwo'
import SplashScreenThree from '../screens/auth/SplashScreenThree'
import PreLoginScreen from '../screens/auth/PreLoginScreen'
import LoginScreen from '../screens/auth/LoginScreen'
import PreRegisterScreen from '../screens/auth/PreRegisterScreen'
import RegisterScreen from '../screens/auth/RegisterScreen'

const AuthStack = createNativeStackNavigator()


const AuthNav = () => (

    <AuthStack.Navigator
        screenOptions={{ headerShown: false }}
    >
        {/*<AuthStack.Screen name='splash1' component={SplashScreenOne} />
        <AuthStack.Screen name='splash2' component={SplashScreenTwo} />
        <AuthStack.Screen name='splash3' component={SplashScreenThree} />*/}
        <AuthStack.Screen name='prelogin' component={PreLoginScreen} />
        <AuthStack.Screen name='login' component={LoginScreen} />
        <AuthStack.Screen name='preregister' component={PreRegisterScreen} />
        <AuthStack.Screen name='register' component={RegisterScreen} />

    </AuthStack.Navigator>

)
  
export default AuthNav