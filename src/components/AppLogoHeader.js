import React from 'react'
import { 
    View, 
    Text,
    Image,
    StyleSheet,
    Dimensions } from 'react-native'



const AppLogoHeader = ({logoColorWhite}) => {
  return (
    <View style={styles.container}>
        {
            logoColorWhite ? 
            (
                <>
                <Image source={require('../assets/logo_kat_w.png')} style={styles.logoImage} />
                <Text style={styles.logoTextWhite}>Katia</Text>
                </>
            ) 
            : 
            (
                <>
                <Image source={require('../assets/logo_kat_r.png')} style={styles.logoImage} />
                <Text style={styles.logoTextRose}>Katia</Text>
                </>
            )
        }
    </View>
  )
}

export default AppLogoHeader

const {width, height} = Dimensions.get('screen')

const styles = StyleSheet.create({
    container: {
        width: width * 0.6,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    logoImage: {
        width: 48,
        height: 48,
        marginBottom: 4
    },
    logoTextWhite: {
        color: '#ffffff',
        fontSize: 50,
        fontFamily: 'FlamanteRomaMedium'
    },
    logoTextRose: {
        color: '#eb5a6d',
        fontSize: 50,
        fontFamily: 'FlamanteRomaMedium'
    },
})