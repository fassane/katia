import React, {useState} from 'react'
import { 
    View, 
    Text, 
    TextInput,
    StyleSheet,
    Dimensions } from 'react-native'

import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'


const Input = ({isInputTitlePresent,
                inputTitle, 
                leftIconName, 
                leftIconColor, 
                rightIconName, 
                rightIconColor, 
                placeholder, 
                keyboardType }) => {

  const [number, onChangeNumber] = useState(null)

  return (
    <>
    {
        isInputTitlePresent ? 
        (
            <View style={styles.inputTitleContainer}>
                <Text style={styles.inputTitle}> {inputTitle} </Text>
            </View>
        ) 
        : 
        null
    }
    <View style={styles.container}>
        
        <FontAwesome 
            name={leftIconName}
            color={leftIconColor}
            size={28}
            style={styles.leftIcon}
        />
        <TextInput
            onChangeText={onChangeNumber}
            value={number}
            placeholder={placeholder}
            keyboardType={keyboardType}
            multiline={false}
            autoCapitalize='none'
            style={styles.textInput}
        />
        <Feather 
            name={rightIconName}
            color={rightIconColor}
            size={24}
            style={styles.rightIcon}
        />
    </View>
    </>
  )
}

const {width, height} = Dimensions.get('screen')

export default Input

const styles = StyleSheet.create({
    inputTitleContainer: {
        left: -width * 0.15,
        width: width * 0.93,
        height: 30,
        justifyContent: 'center',
        position: 'relative',
        left: 0,
        marginTop: 5
    },
    inputTitle: {
        fontSize: 18,
        fontFamily: 'FlamanteRomaMedium',
         
    },
    container: {
        padding: 5,
        borderWidth: 2,
        borderRadius: 30,
        borderColor: '#eb5a6d',
        width: width * 0.9,
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    textInput: {
        padding: 10,
        width: width * 0.7,
        height: 40,
        fontFamily: 'FlamanteRomaMedium'
    },
    leftIcon: {
        position: 'absolute',
        left: 10
    },
    rightIcon: {
        position: 'absolute',
        right: 10
    },
    
})