import { View, 
         Text,
         Image,
         TouchableOpacity,
         StatusBar } from 'react-native'
import React from 'react'
import { styles } from './SplashStyle'

const SplashScreenOne = ({navigation}) => {
  return (
    <View style={styles.container}>
            <StatusBar backgroundColor="#fff" barStyle="dark-content" />
            
                <Image source={require('../../assets/un_swipe.png')} style={styles.image} />
           

            <View style={styles.phraseview}>
                <Text style={styles.phrase}>Bienvenue sur Katia</Text>
            </View>
        
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("splash2")} >
                <Text style={styles.text}>Parcourir</Text>
            </TouchableOpacity>

           
        </View>
  )
}

export default SplashScreenOne