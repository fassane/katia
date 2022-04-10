import React from 'react'
import { 
    View, 
    Text,
    StyleSheet,
    Dimensions,
    Image,
    TouchableOpacity,
    StatusBar } from 'react-native'
import AppLogoHeader from '../../components/AppLogoHeader'



const PreLoginScreen = ({navigation}) => {

    const ConnexionMethode = ({source, text, redirection}) => {
        return(
        <TouchableOpacity style={styles.connexionMethode} onPress={() => navigation.navigate(redirection)} >
            <Image style={styles.imageConnexionMethode} source={source} />
            <Text style={styles.textConnexionMethode}>{text}</Text>
        </TouchableOpacity>
        )
    }

  return (
    <View style={styles.container}>

        <StatusBar backgroundColor='#000' barStyle='white-context' />

        <View style={styles.header}>
            <AppLogoHeader logoColorWhite={true} />
        </View>

        <View style={styles.footer}>
            <View style={styles.condition}>
                <Text style={styles.textCondition}>
                    En te connectant, tu acceptes nos&nbsp;
                    <Text style={styles.textConditionGenerale}>Conditions générales</Text>. 
                    pour en savoir plus sur l'usage que nous faisons de tes données, consulte notre&nbsp;
                    <Text style={styles.textPolitiqueConfidentialite}>Politique de confidentialité</Text>  
                    &nbsp;et notre&nbsp;
                    <Text style={styles.textPolitiqueCookies}>Politique en matière de cookies</Text>
                    .
                </Text>
            </View>      
            

            <View style={styles.modeDeConnexion}>
                <ConnexionMethode source={require('../../assets/google.png')} text='CONNEXION VIA GOOGLE' />
                <ConnexionMethode source={require('../../assets/facebook.png')} text='CONNEXION VIA FACEBOOK' />
                <ConnexionMethode source={require('../../assets/email.png')} text='CONNEXION AVEC UN EMAIL' redirection='login' />
            </View>

            <TouchableOpacity style={styles.problemeDeConnexion}   >
                <Text style={styles.textProblemeDeConnexion}>Un problème de connexion?</Text>
            </TouchableOpacity>
            

        </View>

        

    </View>
  )

}

export default PreLoginScreen

const {width, height} = Dimensions.get('screen')

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eb5a6d'
    },
    header: {
        flex: 1,
        justifyContent: 'center',
    },
    footer: {
        flex: 1.5,
        width: width * 0.8,
    },
    condition: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    textCondition: {
        color: '#ffffff',
        fontSize: 12,
        fontFamily: 'Gotham Rounded Medium'
    },
    textConditionGenerale : {
        fontFamily: 'Gotham Rounded Bold',
        textDecorationLine: 'underline'
    },
    textPolitiqueConfidentialite: {
        fontFamily: 'Gotham Rounded Bold',
        textDecorationLine: 'underline'
    },
    textPolitiqueCookies: {
        fontFamily: 'Gotham Rounded Bold',
        textDecorationLine: 'underline'      
    },
    modeDeConnexion: {
        flex: 2
    },
    connexionMethode: {
        width: width * 0.8,
        height: 50,
        borderWidth: 1,
        borderRadius: 30,
        borderColor: '#ffffff',
        backgroundColor: '#ffffff',
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageConnexionMethode: {
        position: 'absolute',
        left: 12,
        width: 25,
        height: 25,
    },
    textConnexionMethode: {
        fontSize: 13,
        fontFamily: 'Gotham Rounded Bold',
    },
    problemeDeConnexion: {
        justifyContent: 'center',
        alignItems: 'center',
        bottom: height * 0.1
    },
    textProblemeDeConnexion: {
        color: '#ffffff',
        textDecorationLine: 'underline',
        fontFamily: 'Gotham Rounded Bold'
    }
})