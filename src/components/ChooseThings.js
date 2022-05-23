import React, {useState} from 'react'
import { 
    View, 
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions } from 'react-native'



const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
        <Text style={[styles.title, textColor]}>{item.name}</Text>
    </TouchableOpacity>
);



const ChooseThings = ({ inputTitle }) => {


    const [selectedId, setSelectedId] = useState(null);
    const [selectedThing, setSelectedThing] = useState(null)


    const OneChoiceComponent = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "#eb5a6d" : "#efefef";
        const color = item.id === selectedId ? 'white' : '#848484';
        return (
            <Item
                item={item}
                onPress={() => (
                    setSelectedId(1),
                    setSelectedThing('name')
                )}
                backgroundColor={{ backgroundColor }}
                textColor={{ color }}
            
            />
        )
    }

  return (
    <>
        <View style={styles.inputTitleContainer}>
            <Text style={styles.inputTitle}> {inputTitle} </Text> 
        </View>    
        {/*
        <OneChoiceComponent choice='Heterosexuelle' />
        <OneChoiceComponent choice='Bisexuelle' />
        <OneChoiceComponent choice='Monosexuelle' />
        */}
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
        borderColor: '#848484',
        borderRadius: 30,
        backgroundColor: '#efefef',
        marginTop: 5
    },
    choiceText: {
        fontSize: 16,
        fontFamily: 'Gotham Rounded Bold',
        color: '#848484'
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