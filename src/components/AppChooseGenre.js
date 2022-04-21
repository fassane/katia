import React, {useState, useRef} from 'react'
import { 
    View, 
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions } from 'react-native'
import {Picker} from '@react-native-picker/picker';


const GENREDATA = [
    {
        id: 1,
        genre: 'Un Homme'
    },
    {
        id: 2,
        genre: 'Une Femme'
    }
]




const AppChooseGenre = ({inputTitle}) => {

    const [selectedId, setSelectedId] = useState(null)

    const OneChoiceComponent = ({choice, onPress, backgroundColor, textColor}) => {
        //const backgroundColor = GENREDATA.id === selectedId ? "#eb5a6d" : "#FDBFB7";
        //const color = GENREDATA.id === selectedId ? 'white' : 'black';
        return (
            <TouchableOpacity onPress={onPress} style={styles.choiceContainer}>
                <Text style={styles.choiceText}> {choice} </Text>
            </TouchableOpacity>
        )
    }



  return (
    <>
        <View style={styles.inputTitleContainer}>
        <Text style={styles.inputTitle}> {inputTitle} </Text>
        </View>    
        
        <OneChoiceComponent choice='Un Homme' />
        <OneChoiceComponent choice='Une Femme' />
        
        
   
    </>
  )
}

export default AppChooseGenre

const {width, height} = Dimensions.get('screen')

const styles = StyleSheet.create({
    choiceContainer: {
        width: width * 0.55,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        padding: 10,
        borderColor: '#eb5a6d',
        borderRadius: 30,
        backgroundColor: '#eb5a6d',
        marginTop: 5
    },
    choiceContainerWhite: {
        width: width * 0.55,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        padding: 10,
        borderColor: '#eb5a6d',
        borderRadius: 30,
        backgroundColor: '#eb5a6d',
        marginTop: 5
    },
    choiceText: {
        fontSize: 16,
        fontFamily: 'Gotham Rounded Bold',
        color: 'white'
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
        
    },
})