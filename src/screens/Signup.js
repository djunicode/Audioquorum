import React from 'react'
import{
    View,
    Text,
    StyleSheet
} from 'react-native'

function Signup() {
  return (
    <View style={styles.container}>
        <Text style={styles.textStyle}>Signup</Text>
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

export default Signup