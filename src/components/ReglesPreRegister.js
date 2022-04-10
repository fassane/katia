import React from 'react'
import { 
    View, 
    Text,
    StyleSheet,
    Dimensions } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import { styles } from '../screens/auth/SplashStyle'




const ReglesPreRegister = ({iconName, title, text, isThereTextClique}) => {

  return (
    <View style={stylesregles.container}>
        <View style={stylesregles.titleContainer}>
            <Feather 
                name={iconName}
                color='#eb5a6d'
                size={24}
                style={styles.rightIcon}
            />
            <Text style={stylesregles.title}> {title} </Text>
        </View>
        <Text style={stylesregles.text}> 
            {text}
            &nbsp; 
            {
                isThereTextClique ? 
                ( <Text style={stylesregles.textClique} >Clique pour en savoir plus.</Text> ) 
                : 
                null
            } 
        </Text>
    </View>
  )
  
}

export default ReglesPreRegister

const {width, height} = Dimensions.get('screen')

const stylesregles = StyleSheet.create({
    container: {
        width: width * 0.7,
        marginTop: 20
    },
    titleContainer: {
        width: width * 0.6,
        height: 30,
        flexDirection: 'row'
    },
    title: {
        width: width * 0.7,
        color: '#000',
        fontSize: 19,
        fontFamily: 'Gotham Rounded Bold',
    },
    text: {
        fontFamily: 'Gotham Rounded Medium',
    },
    textClique: {
        color: '#eb5a6d',
        textDecorationLine: 'underline',
        fontFamily: 'Gotham Rounded Bold',
    }
})