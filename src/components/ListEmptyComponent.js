import React from 'react';
import { View, 
        StyleSheet, 
        ActivityIndicator } from 'react-native';


const ListEmptyComponent = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#00ff00" />
        </View>
    )
}



export default ListEmptyComponent

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
    }
})