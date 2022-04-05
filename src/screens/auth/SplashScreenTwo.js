import { View, 
        Text,
        Image,
        StatusBar,
        TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './SplashStyle'

const SplashScreenTwo = ({navigation}) => {
  return (
    <View style={styles.container}>
            <StatusBar backgroundColor="#fff" barStyle="dark-content" />
            <Image source={require('../../assets/un_pensif.png')} style={styles.image} />
            
            <View style={styles.phraseviewn}>
                <Text style={styles.phrase}>Toujours pensif ?</Text>
            </View>

            <TouchableOpacity style={styles.btnprevious} onPress={() => navigation.navigate("splash1")} >
                <Text style={styles.textn}>Précédent</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnnext} onPress={() => navigation.navigate("splash3")} >
                <Text style={styles.textn}>Suivant</Text>
            </TouchableOpacity>
            
        </View>
  )
}

export default SplashScreenTwo