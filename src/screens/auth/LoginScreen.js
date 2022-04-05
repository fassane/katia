import React from 'react'
import { View, 
        Text,
        TouchableOpacity,
        Platform,
        Dimensions,
        Image,
        StyleSheet,
        StatusBar } from 'react-native'
import Input from '../../components/Input'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AppLogoHeader from '../../components/AppLogoHeader'


const LoginScreen = ({navigation}) => {


  const ValidationButton = ({text, redirection}) => {
    return (
      <TouchableOpacity style={styles.buttonValidation} onPress={() => navigation.navigate(redirection)} >
            <Text style={styles.textDeValidation}> 
              {text} 
            </Text>
      </TouchableOpacity>
    )
  }

  const PhraseRedirection = ({text, redirection, style}) => {
    return (
      <TouchableOpacity style={style}  onPress={() => navigation.navigate(redirection)} >
                <Text style={styles.textphraseDeRedirection}> 
                  {text}
                </Text>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>

      <StatusBar backgroundColor='#efefef' barStyle='dark-content' /> 

      <View style={styles.header}>

        <TouchableOpacity style={styles.backIcon}  onPress={() => navigation.navigate('prelogin')} >
          <FontAwesome  
            name='arrow-left'
            color='#ccc'
            size={26}
          />
        </TouchableOpacity>

        <AppLogoHeader logoColorWhite={false} />

      </View>

      <View style={styles.footer}>

        <Text style={styles.textRavieDeVoir}>Ravi de vous revoir</Text>

        <Input 
          inputTitle='Votre adresse email?'
          leftIconName='user' 
          leftIconColor='#eb5a6d'
          rightIconName='check-circle'
          rightIconColor='green'
          placeholder='Entrer votre email'
          keyboardType='email-address'
          />
        <Text></Text>
        <Input 
          inputTitle='Votre mot de passe'
          leftIconName='lock'
          leftIconColor='#eb5a6d' 
          rightIconName='eye-off'
          rightIconColor='#606060'
          placeholder='Entrer votre mot de passe'
          keyboardType='numeric'
          />

        <PhraseRedirection text="Mot de passe oublié?" redirection='prelogin' style={styles.phraseDeRedirectionMotDePasseOublie} /> 
          
        <ValidationButton text='Je me connecte' redirection='prelogin' />

        <PhraseRedirection text="Je n'ai pas de compte. Je m'inscris!" redirection='preregister' style={styles.phraseDeRedirection} />

      </View>
     

    </View>
  )

}

export default LoginScreen

const {width, height} = Dimensions.get('screen')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  backIcon: {
    position: 'absolute',
    top: height * 0.02,
    left: - width * 0.28
  },
  footer: {
    flex: 2,
    alignItems: 'center'
  },
  textRavieDeVoir: {
    fontSize: 30,
    color: '#000',
    position: 'relative',
    fontFamily: 'FlamanteRomaMedium',
    marginBottom: 20
  },
  buttonValidation: {
    position: 'relative',
    top: height * 0.03,
    width: width * 0.9,
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
    fontFamily: 'FlamanteRomaMedium'
  },
  phraseDeRedirection: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    top: height * 0.05
  },
  phraseDeRedirectionMotDePasseOublie: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    top: height * 0.005,
  },
  textphraseDeRedirection: {
      color: '#606060',
      textDecorationLine: 'underline',
      fontFamily: 'FlamanteRomaMedium'
  }
  
})