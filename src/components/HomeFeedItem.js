import React from 'react';
import { View, 
        Text,
        StyleSheet,
        TouchableOpacity,
        Image,
        Dimensions, 
        TouchableWithoutFeedback} from 'react-native';
import Ionicons  from 'react-native-vector-icons/Ionicons';



const HomeFeedItem = () => {


  return (

    <View style={styles.itemContainer}>

      <View style={styles.itemHeader}>
        <Image source={require('../assets/camilla.jpg')} style={styles.itemHeaderImage} />
        <Ionicons name='ellipsis-vertical-outline' size={25} color='#303030' style={styles.itemHeaderRightIcon} />
      </View>

      <View style={styles.itemContent}>
        <Image source={require('../assets/camilla.jpg')} style={styles.itemContentImage} />
      </View>

      <View style={styles.itemFooter}>
        <View style={styles.itemFooterUp}>
          <View style={styles.itemFooterUpLeft}>
            <Ionicons name='heart-outline' size={28} color='#303030' style={styles.itemFooterUpLeftIcon} />
            <Ionicons name='chatbubble-outline' size={28} color='#303030' style={styles.itemFooterUpLeftIcon} />
            <Ionicons name='navigate-outline' size={28} color='#303030' style={styles.itemFooterUpLeftIcon} />
          </View>
          <TouchableOpacity style={styles.itemFooterUpRight}>
            <Ionicons name='bookmark-outline' size={30} color='#303030' />
          </TouchableOpacity>
        </View>
        
        <View style={styles.itemFooterDown}>

        </View>

        
      </View>

    </View>
  )

}
export default HomeFeedItem


const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
    itemContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      width: width,
      height: height * 0.68,
      top: 100
    },
    itemHeader: {
      height: 45,
      width: width,
      flexDirection: 'row',
      backgroundColor: '#fff',
      alignItems: 'center'
    },
    itemHeaderImage: {
      height: 32,
      width: 32,
      position: 'absolute',
      left: 10,
      borderWidth: 1,
      borderColor: 'transparent',
      borderRadius: 15
    },
    itemHeaderRightIcon: {
      position: 'absolute',
      right: 10
    },
    itemContent: {
      width: width,
      height: height * 0.5
    },
    itemContentImage: {
      width: width,
      height: height * 0.5
    },
    itemFooter: {
      height: 90,
      width: width,

    },
    itemFooterUp: {
      height: 45,
      width: width,
      flexDirection: 'row',
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center'
    },
    itemFooterUpLeft: {
      flexDirection: 'row',
      position: 'absolute',
      left: 10,
    },
    itemFooterUpLeftIcon: {
      marginRight: 10
    },
    itemFooterUpRight: {
      position: 'absolute',
      right: 10
    }
})

