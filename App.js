import React, {useEffect} from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import AuthNav from './src/navigation/AuthNav';
import SplashScreen from 'react-native-splash-screen';
import {LogBox} from "react-native"



export default function App() {


  LogBox.ignoreLogs([
    "exported from 'deprecated-react-native-prop-types'.",
  ])

  //Hide Splash screen on app load.
  useEffect(() => {
    SplashScreen.hide();
  });


  return (
    <NavigationContainer>
      
      <AuthNav />
    
    </NavigationContainer>
  );
}