import React from 'react'
import{
    View,
    Text,
    StyleSheet
} from 'react-native'

function HomeScreen() {
  return (
    <View style={styles.container}>
        <Text style={styles.textStyle}>HomeScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        fontSize: 30,
        color:'black'
    }
});

export default HomeScreen