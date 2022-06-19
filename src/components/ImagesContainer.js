import React, {useState} from 'react'
import { 
    View, 
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    Dimensions } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import ImagePicker from 'react-native-image-crop-picker';




const ImagesContainer = ({ navigation, inputTitle, isForProfileScreen }) => {

    const [image, setImage] = useState('../assets/person.png')

    //console.log(image.path)


    const takePhotoFromCamera = () => {
        //console.log("prendre une photo")
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
          }).then(image => {
            //console.log(image.path);
            setImage(image.path)
          });
    }

    const choosePhotoFromGallery = () => {
        //console.log("choisir photo depuis galerie")
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
          }).then(image => {
            //console.log(image);
            setImage(image.path)
          });
    }

    
    const RenderInnerComponent = ({onPress, text}) => {
        <TouchableOpacity onPress={onPress} style={styles.renderInnerComponent}>
            <Text style={styles.textRenderInner}> {text} </Text>
        </TouchableOpacity>
    }

    const renderInner = () => {
        return(
        <View style={styles.panel}>
            <RenderInnerComponent text='Choisir la camera' />
        </View>
        )
    }
    
    

    const AddImageIcon = ({redirection}) => {
        return (
            <TouchableOpacity 
                style={ isForProfileScreen ? styles.addImageIconProfileScreen : styles.addImageIcon} 
                onPress={() => navigation.navigate({redirection}) } >
                <FontAwesome  
                    name='plus-circle'
                    size={30}
                    color='#eb5a6d'
                />
            </TouchableOpacity>
        )
    }
    
    const RemoveImageIcon = () => {
        return (
            <TouchableOpacity 
                style={ isForProfileScreen ? styles.removeImageIconProfileScreen : styles.removeImageIcon}
                >
                <FontAwesome  
                    name='close'
                    size={35}
                    color='#eb5a6d'
                />
            </TouchableOpacity>
        )
    }

    const OneImageContainer = ({isImageAlreadyChoose}) => {
        return (
            <TouchableOpacity 
                style={isForProfileScreen ? styles.oneImageContainerProfileScreen : styles.oneImageContainer}>
                {
                    image == '../assets/person.png' ? 
                    (<Image 
                        source={require('../assets/person.png')} 
                        style={isForProfileScreen ? styles.imageProfileScreen : styles.image} />) 
                    : 
                    (<Image 
                        source={{ uri: image.path }} 
                        style={isForProfileScreen ? styles.imageProfileScreen : styles.image} />)
                }
                
                    <AddImageIcon />
                
            </TouchableOpacity>
        )
    }

    const ThreeImageContainer = () => {
        return (
            <View style={styles.threeImageContainer}>
                <OneImageContainer isImageAlreadyChoose={true} />
                <OneImageContainer isImageAlreadyChoose={true} />
                <OneImageContainer isImageAlreadyChoose={false} />
            </View>
        )
    }



  return (
    <>
    <View style={styles.inputTitleContainer}>
        <Text style={styles.inputTitle}> {inputTitle} </Text>
    </View>

    <View style={styles.container}>

        <ThreeImageContainer />
        <ThreeImageContainer />

        
        
    </View>
    </>
  )
}

export default ImagesContainer

const {width, height} = Dimensions.get('screen')

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
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
    addImageIcon: {
        position: 'absolute',
        bottom: 5,
        right: 5
    },
    addImageIconProfileScreen: {
        position: 'absolute',
        bottom: 2,
        right: 2
    },
    removeImageIconProfileScreen: {
        position: 'absolute',
        bottom: 2,
        right: 2
    },
    removeImageIcon: {
        position: 'absolute',
        bottom: 5,
        right: 5
    },
    threeImageContainer: {
        flexDirection: 'row',
        
    },
    oneImageContainer: {
        borderRadius: 20,
        width: width * 0.3,
        height: height * 0.25,
        marginTop: 10,
    },
    oneImageContainerProfileScreen: {
        borderRadius: 20,
        width: width * 0.24,
        height: height * 0.12,
        marginTop: 7,
        marginRight: 7
    },
    image: {
        width: width * 0.285,
        height: height * 0.24,
        borderWidth: 2,
        borderColor: '#848484',
        borderRadius: 20,
        
    },
    imageProfileScreen: {
        width: width * 0.24,
        height: height * 0.12,
        borderWidth: 2,
        borderColor: '#848484',
        borderRadius: 20,
    },

    panel: {
        width: width,
        height: height * 0.4,
        backgroundColor: '#ccc'
    },

    renderInnerComponent: {
        borderWidth: 1,
        padding: 10,
        backgroundColor: '#eb5a6d'
    },
    textRenderInner: {
        color: '#fff'
    }
})