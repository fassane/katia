import React from 'react'
import { 
    View, 
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Dimensions } from 'react-native'
import ReglesPreRegister from '../../components/ReglesPreRegister'




const PreRegisterScreen = ({navigation}) => {

    const ValidationButton = ({text, redirection}) => {
        return (
          <TouchableOpacity style={styles.buttonValidation} onPress={() => navigation.navigate(redirection) } >
                <Text style={styles.textDeValidation}> {text} </Text>
          </TouchableOpacity>
        )
      }

  return (
    <View style={styles.container}>
        
        <View style={styles.subContainer}>
            <Image source={require('../../assets/logo_kat_r.png')} style={styles.logo} />
            <Text style={styles.textBienvenu}>Bienvenue sur Katia.</Text>
            <Text style={styles.regle}>Voici les règles : merci de les respecter pour une meilleure expérience.</Text>
        </View>

        <ReglesPreRegister 
            iconName='check-square'
            title='Sois toi-même.'
            text='Assure-toi que tes photos, ton âge et ta bio soient fidèles à toi-même.'
        />
        <ReglesPreRegister 
            iconName='shield'
            title='Ta sécurité avant tout.'
            text='Ne partage pas tes informations personnelles trop vite.'
            isThereTextClique={true}
        />
        <ReglesPreRegister 
            iconName='smile'
            title='Sois bienveillant.'
            text='Traite les autres membres avec respect, exactement comme tu aimerais être traité(e).'
        />

        <ValidationButton text="J'accepte" redirection='register' />
        
    </View>
  )
}

export default PreRegisterScreen

const {width, height} = Dimensions.get('screen')

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    subContainer: {
        width: width,
        alignItems: 'center',
        marginBottom: 15
    },
    logo: {
        width: width * 0.22,
        height: height * 0.11
    },
    textBienvenu: {
        color: '#000',
        fontSize: 24,
        fontFamily: 'FlamanteRomaMedium',
        marginBottom: 7
    },
    regle: {
        fontFamily: 'FlamanteRomaMedium',
        width: width * 0.7,
        marginLeft: 15
    },

    buttonValidation: {
        position: 'relative',
        top: height * 0.035,
        width: width * 0.7,
        height: 50,
        borderWidth: 2,
        borderColor: '#eb5a6d',
        borderRadius: 30,
        backgroundColor: '#eb5a6d',
        justifyContent: 'center',
        alignItems: 'center'
      },
      textDeValidation: {
        color: '#ffffff',
        fontSize: 25,
        fontFamily: 'FlamanteRomaMedium',
      }
    
})