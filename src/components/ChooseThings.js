import React from 'react'
import { 
    View, 
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions } from 'react-native'



const ChooseThings = ({ inputTitle }) => {


    const OneChoiceComponent = ({choice}) => {
        return (
        <TouchableOpacity style={styles.choiceContainer}>
            <Text style={styles.choiceText}> {choice} </Text>
        </TouchableOpacity>
        )
    }

  return (
    <>
        <View style={styles.inputTitleContainer}>
        <Text style={styles.inputTitle}> {inputTitle} </Text>
        </View>    
        
        <OneChoiceComponent choice='Heterosexuelle' />
        <OneChoiceComponent choice='Bisexuelle' />
        <OneChoiceComponent choice='Monosexuelle' />
   
    </>
  )

}

export default ChooseThings

const {width, height} = Dimensions.get('screen')

const styles = StyleSheet.create({
    choiceContainer: {
        width: width * 0.55,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        padding: 10,
        borderColor: '#303030s',
        borderRadius: 30,
        backgroundColor: '#efefef',
        marginTop: 5
    },
    choiceText: {
        fontSize: 16,
        fontFamily: 'Gotham Rounded Bold',
        color: '#303030'
    },
    inputTitleContainer: {
        left: -width * 0.15,
        width: width * 0.93,
        height: 30,
        justifyContent: 'center',
        position: 'relative',
        left: 0,
        marginTop: 25
    },
    inputTitle: {
        fontSize: 16,
        fontFamily: 'Gotham Rounded Bold',
        color: '#303030'
    },
})