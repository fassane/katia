import React, {useState} from 'react'
import { 
    View, 
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import DatePicker from 'react-native-date-picker'
import { Months } from '../utilities/MatchCorrectDate'
import { Days } from '../utilities/MatchCorrectDate'



const AppDatePicker = ({inputTitle, iconSize, leftIconName, leftIconColor }) => {

  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  //console.log(date)
  const year = date.getFullYear()
  const month = date.getMonth()
  const day = date.getDay()
  console.log('annee: ', year)

  //console.log(Months[day])


  return (
    <>
      <View style={styles.inputTitleContainer}>
        <Text style={styles.inputTitle}> {inputTitle} </Text>
    </View>    
    <TouchableOpacity style={styles.container} onPress={() => setOpen(true)} >
        <FontAwesome 
            name={leftIconName}
            color={leftIconColor}
            size={iconSize}
            style={styles.leftIcon}
        />
        <Text style={styles.dateText}>&nbsp;{Days[day]}, {day} {Months[month]} {year}&nbsp;</Text>

    </TouchableOpacity>
      
      <DatePicker
        modal
        title='Choisissez la date'
        mode='date'
        confirmText='Confirmer'
        cancelText='Annuler'
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)

        }}
        onCancel={() => {
          setOpen(false)
          
        }}
      />
    </>
  )
  
}

export default AppDatePicker

const {width, height} = Dimensions.get('screen')

const styles = StyleSheet.create({
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
      fontSize: 16,
      fontFamily: 'Gotham Rounded Bold',
      
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
    flexDirection: 'row'
  },    
  leftIcon: {
    position: 'absolute',
    left: 10
  },
  dateText: {
    fontFamily: 'Gotham Rounded Medium',
  }

})