import React from 'react'
import { 
    View, 
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions } from 'react-native'


const PassionsChoose = ({inputTitle }) => {

    const PassionItem = ({item}) => {
        return (
            <TouchableOpacity style={styles.item}>
                <Text style={styles.itemText}> {item} </Text>
            </TouchableOpacity>
        )
    }

  return (
    <>
    <View style={styles.inputTitleContainer}>
        <Text style={styles.inputTitle}> {inputTitle} </Text>
    </View>

    <View style={styles.container}>
        <PassionItem item="Football" />
        <PassionItem item="Jogging" />
        <PassionItem item="Patisserie" />
        <PassionItem item="Manicure" />
        <PassionItem item="Pedicure" />
        <PassionItem item="Basket-Ball" />
        <PassionItem item="Rugby" />
        <PassionItem item="Natation" />
        <PassionItem item="Autres" />
    </View>
    </>
  )

}

export default PassionsChoose

const {width, height} = Dimensions.get('screen')

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: width * 0.9,
        
    },
    inputTitleContainer: {
        left: -width * 0.15,
        width: width * 0.93,
        height: 30,
        justifyContent: 'center',
        position: 'relative',
        left: 0,
        marginTop: 10
    },
    inputTitle: {
        fontSize: 18,
        fontFamily: 'FlamanteRomaMedium',  
    },
    item: {
        borderWidth: 2,
        padding: 10,
        borderRadius: 20,
        borderColor: '#eb5a6d',
        
    },
    itemText: {
        color: '#eb5a6d',
        fontFamily: 'FlamanteRomaMedium',  
    }
})