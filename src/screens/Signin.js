import React from 'react'
import{
    View,
    Text,
    StyleSheet
} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

function Signin({navigation}) {
  return (
    <View style={styles.container}>
        <Text style={styles.textStyle}>Signin</Text>
        <TouchableOpacity onPress={()=>{navigation.navigate('Signup')}}>
            <Text style={styles.textStyle}>Signup</Text>
        </TouchableOpacity>
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

export default Signin