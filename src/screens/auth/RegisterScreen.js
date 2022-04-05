import React from 'react'
import { 
  View, 
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  StatusBar } from 'react-native'
import AppLogoHeader from '../../components/AppLogoHeader'
import Input from '../../components/Input'
import ImagesContainer from '../../components/ImagesContainer'
import PassionsChoose from '../../components/PassionsChoose'
import AppDatePicker from '../../components/AppDatePicker'



const RegisterScreen = ({navigation}) => {

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

    <ScrollView style={styles.scrollContainer}>

      <View style={styles.container}>

        <AppLogoHeader logoColorWhite={false}  />

        <Input 
          isInputTitlePresent={true}
          inputTitle='Quel est votre prenom?'
          leftIconName='user' 
          leftIconColor='#eb5a6d'
          rightIconName='check-circle'
          rightIconColor='green'
          placeholder='Entrer votre prenom'
          keyboardType='email-address'
          />
        <AppDatePicker  
          inputTitle="Votre date d'anniversaire?"
        />
        <Input 
          isInputTitlePresent={true}
          inputTitle="Votre adresse e-mail?"
          leftIconName='envelope'
          leftIconColor='#eb5a6d' 
          rightIconName='eye-off'
          rightIconColor='#606060'
          placeholder='Entrer votre mot de passe'
          keyboardType='numeric'
        />
        <Input 
          isInputTitlePresent={true}
          inputTitle="Choisir un mot de passe"
          leftIconName='envelope'
          leftIconColor='#eb5a6d' 
          rightIconName='eye-off'
          rightIconColor='#606060'
          placeholder='Entrer votre mot de passe'
          keyboardType='numeric'
        />
        <Input 
          isInputTitlePresent={true}
          inputTitle='Vous êtes?'
          leftIconName='user' 
          leftIconColor='#eb5a6d'
          rightIconName='check-circle'
          rightIconColor='green'
          placeholder='Entrer votre email'
          keyboardType='email-address'
          />
        <Input 
          isInputTitlePresent={true}
          inputTitle='Votre orirentation sexuelle?'
          leftIconName='lock'
          leftIconColor='#eb5a6d' 
          rightIconName='eye-off'
          rightIconColor='#606060'
          placeholder='Entrer votre mot de passe'
          keyboardType='numeric'
        />
        <Input 
          isInputTitlePresent={true}
          inputTitle='Vous voulez voir?'
          leftIconName='user' 
          leftIconColor='#eb5a6d'
          rightIconName='check-circle'
          rightIconColor='green'
          placeholder='Entrer votre email'
          keyboardType='email-address'
        />
        <Input 
          isInputTitlePresent={true}
          inputTitle='Où avez-vous frequentez?'
          leftIconName='lock'
          leftIconColor='#eb5a6d' 
          rightIconName='eye-off'
          rightIconColor='#606060'
          placeholder='Entrer votre mot de passe'
          keyboardType='numeric'
        />
        <Input 
          isInputTitlePresent={true}
          inputTitle='Vous habitez quelle ville?'
          leftIconName='user' 
          leftIconColor='#eb5a6d'
          rightIconName='check-circle'
          rightIconColor='green'
          placeholder='Entrer votre email'
          keyboardType='email-address'
          />
        <Input 
          isInputTitlePresent={true}
          inputTitle='Quel est votre pays?'
          leftIconName='user' 
          leftIconColor='#eb5a6d'
          rightIconName='check-circle'
          rightIconColor='green'
          placeholder='Entrer votre email'
          keyboardType='email-address'
          />
        <ImagesContainer  
          inputTitle="Ajouter quelques photos"
        />
        <PassionsChoose  
          inputTitle="Vos passions?"
        />
        

        <ValidationButton text="Je m'inscris" redirection='prelogin' />

        <PhraseRedirection text="J'ai déjà un compte. Je me connecte!" redirection='login' style={styles.phraseDeRedirection} />



      </View>

        

    </ScrollView>

    
  )

}

export default RegisterScreen

const {width, height} = Dimensions.get('screen')

const styles = StyleSheet.create({
  scrollContainer: {
    width: width,
    
  },
  container: {
    
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonValidation: {
    position: 'relative',
    marginTop: height * 0.06,
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
    marginTop: height * 0.02,
    marginBottom: height * 0.05
  },
  textphraseDeRedirection: {
    color: '#606060',
    textDecorationLine: 'underline',
    fontFamily: 'FlamanteRomaMedium'
  }
  
})