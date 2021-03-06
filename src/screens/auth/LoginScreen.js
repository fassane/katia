import React, {useState} from 'react'
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


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [data, setData] = useState({
    emailValidation: true,
    passwordValidation: true
  });

  /// validation of fields
  const validationDeEmail = (text) => {
    if(text.trim().length >= 8 ) {
        setData({
            ...data,
            emailValidation: true  
        });
    }
    else{
        setData({
            ...data,
            emailValidation: false
        });
    }
  }
  const validationMotDePasse = (text) => {
      if(text.trim().length >= 6) {
          setData({
              ...data,
              passwordValidation: true
          });
      }
      else{
          setData({
              ...data,
              passwordValidation: false
          });
      }
  }


  /******  validation button component ******/
  const ValidationButton = ({text, redirection}) => {
    return (
      <TouchableOpacity style={styles.buttonValidation} onPress={() => navigation.navigate(redirection)} >
            <Text style={styles.textDeValidation}> 
              {text} 
            </Text>
      </TouchableOpacity>
    )
  }

  /******  redirection phrase component ******/
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
          amIWhantInputWithAllBorder={true}
          iconSize={25}
          leftIconName='user-o' 
          leftIconColor='#eb5a6d'
          rightIconName='check-circle'
          rightIconColor='green'
          placeholder='Entrer votre email'
          multiline={false}
          value={email}
          onChangeText={text => setEmail(text)}
          onEndEditing={(e) => validationDeEmail(e.nativeEvent.text)}
          keyboardType='email-address'
          />
        <Text></Text>
        <Input 
          inputTitle='Votre mot de passe'
          amIWhantInputWithAllBorder={true}
          iconSize={28}
          leftIconName='key'
          leftIconColor='#eb5a6d' 
          rightIconName='eye-off'
          rightIconColor='#606060'
          placeholder='Entrer votre mot de passe'
          multiline={false}
          secureTextEntry
          value={password}
          onChangeText={text => setPassword(text)}
          onEndEditing={(e) => validationMotDePasse(e.nativeEvent.text)}
          keyboardType='numeric'
          />

        <PhraseRedirection text="Mot de passe oubli???" redirection='prelogin' style={styles.phraseDeRedirectionMotDePasseOublie} /> 
          
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
    fontSize: 28,
    color: '#303030',
    position: 'relative',
    fontFamily: 'Gotham Rounded Bold',
    marginBottom: 20
  },
  buttonValidation: {
    position: 'relative',
    top: height * 0.03,
    width: width * 0.9,
    height: 50,
    borderWidth: 2,
    borderColor: '#bababa',
    borderRadius: 30,
    backgroundColor: '#efefef',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5
  },
  textDeValidation: {
    color: '#848484',
    fontSize: 25,
    fontFamily: 'Gotham Rounded Bold',
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
    top: height * 0.003,
  },
  textphraseDeRedirection: {
      color: '#606060',
      textDecorationLine: 'underline',
      fontFamily: 'Gotham Rounded Bold',
  }
  
})