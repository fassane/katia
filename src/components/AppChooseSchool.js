import React, {useState} from 'react'
import { 
    View, 
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    Alert,
    Modal,
    Pressable,
    FlatList,
    StatusBar } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { SCHOOLS } from '../utilities/SchoolOrUniversityList';


const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
      <Text style={[styles.title, textColor]}>{item.name}</Text>
    </TouchableOpacity>
);



const AppChooseSchool = ({inputTitle, leftIconName, leftIconColor, iconSize}) => {


    const [modalVisible, setModalVisible] = useState(false);

    const [selectedId, setSelectedId] = useState(null);

    const [selectedSchool, setSelectedSchool] = useState(null)

    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "#eb5a6d" : "#303030";
        const color = item.id === selectedId ? 'white' : 'white';
        return (
          <Item
            item={item}
            onPress={() => (
                setSelectedId(item.id),
                setSelectedSchool(item.name)
            )}
            backgroundColor={{ backgroundColor }}
            textColor={{ color }}
            
          />
        );
      };


  return (
    <>
        <View style={styles.inputTitleContainer}>
            <Text style={styles.inputTitle}> {inputTitle} </Text>
        </View>    
        <TouchableOpacity style={styles.container} onPress={() => setModalVisible(!modalVisible)} >
            <FontAwesome 
                name={leftIconName}
                color={leftIconColor}
                size={iconSize}
                style={styles.leftIcon}
            />
            {
                selectedSchool!=null ? 
                (<Text style={styles.schoolText}> {selectedSchool} </Text>) 
                : 
                (<Text style={styles.schoolText}> ---- Appuie pour choisir ---- </Text>)
            }
            

        </TouchableOpacity> 

        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Veuillez choisir votre école</Text>
                        <View style={styles.flatListSchool}>
                            <FlatList
                                data={SCHOOLS}
                                renderItem={renderItem}
                                keyExtractor={(item) => item.id}
                                extraData={selectedId}
                                
                            />
                        </View>
                        
                        <TouchableOpacity 
                            style={styles.buttonChoose}
                            onPress={() => setModalVisible(!modalVisible) }
                        >
                            <Text style={styles.textChoose}>J'ai bien choisi</Text>
                        </TouchableOpacity>

                </View>
                </View>
            </Modal>
            
        </View>
      
    </>
  )
}

export default AppChooseSchool


const {width, height} = Dimensions.get('screen')

const styles = StyleSheet.create({
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
    container: {
        padding: 5,
        borderWidth: 2,
        borderRadius: 30,
        borderColor: '#848484',
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
    schoolText: {
        fontFamily: 'Gotham Rounded Medium',
    },

    flatListSchool: {
        width: width * 0.6,
        height: height * 0.4,
        marginBottom: 20,
        marginTop: 10
    },

    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 20
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 30,
      padding: 40,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 5
      },
      shadowOpacity: 0.25,
      shadowRadius: 8,
      elevation: 10
    },
    
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 10,
      textAlign: "center",
      fontSize: 16,
      fontFamily: 'Gotham Rounded Bold',
      color: '#303030'
    },

    containerTT: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
      },
      item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 0,
        alignItems: 'center',
        borderRadius: 30
      },
      title: {
        fontSize: 20,
        fontFamily: 'Gotham Rounded Bold'
      },
      

      buttonChoose: {
          backgroundColor: '#eb5a6d',
          borderRadius: 30,
          padding: 12,
          elevation: 10
      },
      textChoose: {
          color: 'white',
          fontFamily: 'Gotham Rounded Bold'
      }

  });
