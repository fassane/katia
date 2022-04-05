import { StyleSheet, Dimensions } from "react-native"

const {width, height} = Dimensions.get('screen');

export const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#fff"
    },
    image: {
        width: width * 0.85,
        height: height * 0.53,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: "#eb5a6d",
        position: 'absolute',
        top: "5%"
    },
    btn: {
        position: 'absolute',
        bottom: "10%",
        width: 180,
        alignItems: 'center',
        borderWidth: 1,
        padding: 10,
        borderRadius: 30,
        borderColor: "#eb5a6d",
        backgroundColor: "#eb5a6d"
    },
    text: {
        color: "#fff",
        fontSize: 20,
        fontFamily: 'FlamanteRomaMedium'
        
    },
    btnprevious: {
        position: 'absolute',
        bottom: "3%",
        left: "2%",
        width: 100,
        alignItems: 'center',
        borderWidth: 1,
        padding: 10,
        borderRadius: 30,
        borderColor: "#eb5a6d",
        backgroundColor: "#eb5a6d"
    },
    btnnext: {
        position: 'absolute',
        bottom: "3%",
        right: "2%",
        width: 100,
        alignItems: 'center',
        borderWidth: 1,
        padding: 10,
        borderRadius: 30,
        borderColor: "#eb5a6d",
        backgroundColor: "#eb5a6d"
    },
    textn: {
        color: "#fff",
        fontSize: 16,
        fontFamily: 'FlamanteRomaMedium'
    },
    back: {
        position: 'absolute',
        top: 5,
        left: 5
    },
    phraseview: {
        position: 'absolute',
        bottom: "28%",
        alignItems: 'center'
    },
    phrase: {
        fontSize: 30,
        fontFamily: 'FlamanteRomaMedium'
    },
    phraseviewn: {
        position: 'absolute',
        bottom: "20%",
        alignItems: 'center'
    }
})