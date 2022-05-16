import React, {useEffect} from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import AuthNav from './src/navigation/AuthNav';
import SplashScreen from 'react-native-splash-screen'



export default function App() {


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