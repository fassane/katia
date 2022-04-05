import { View, 
        Text,
        Image,
        StatusBar,
        TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './SplashStyle'

const SplashScreenThree = ({navigation}) => {
  return (
    <View style={styles.container}>
            <StatusBar backgroundColor="#fff" barStyle="dark-content" />
            <Image source={require('../../assets/un_start.png')} style={styles.image} />
            
            <View style={styles.phraseviewn}>
                <Text style={styles.phrase}> Nouvelles rencontres </Text>
            </View>

            <TouchableOpacity style={styles.btnprevious} onPress={() => navigation.navigate("splash2")} >
                <Text style={styles.textn}>Précédent</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnnext} onPress={() => navigation.navigate("prelogin")} >
                <Text style={styles.textn}>Suivant</Text>
            </TouchableOpacity>
        
        </View>
  )
}

export default SplashScreenThree