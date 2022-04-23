import React from 'react'
import{
    View,
    Text,
    StyleSheet,TextInput
} from 'react-native'

const Input=(props)=>{
  return (
    <View>
        <TextInput
            style={styles.textInput}
            placeholder={props.placeholder}
            placeholderTextColor={props.placeholderTextColor}
            keyboardType={props.keyboardType}
            autoCompleteType={props.autoCompleteType}
            autoCapitalize={props.autoCapitalize}
            value={props.value}
            onChangeText={props.onChangeText}
          />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        marginLeft: 5,
        backgroundColor: 'grey',
        fontSize: 15,
        color: 'black',
        paddingLeft: 10,
        fontWeight: '600',
        
      },
});

export default Input