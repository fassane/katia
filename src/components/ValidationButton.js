import React from 'react'
import { 
    TouchableOpacity, 
    Text,
    StyleSheet,
    Dimensions } from 'react-native'

const ValidationButton = ({text, redirection}) => {
  return (
    <TouchableOpacity style={styles.buttonValidation} onPress={() => redirection} >
          <Text style={styles.textDeValidation}> {text} </Text>
    </TouchableOpacity>
  )
}

export default ValidationButton

const {width, height} = Dimensions.get('screen')

const styles = StyleSheet.create({
    buttonValidation: {
        position: 'absolute',
        bottom: height * 0.25,
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
        fontWeight: 'bold',
        fontSize: 25
      }
})

