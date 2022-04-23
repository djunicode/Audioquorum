import React from 'react'
import{
    View,
    Text,
    StyleSheet
} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import ReactNativeBiometrics from 'react-native-biometrics';



function Fingerprint({navigation}) {
  const isBiometricSupport = async () => {
    let {available, biometryType} =
      await ReactNativeBiometrics.isSensorAvailable();
    if (available && biometryType === ReactNativeBiometrics.TouchID) {
      console.log('TouchID is supported', biometryType);
    } else if (available && biometryType === ReactNativeBiometrics.FaceID) {
      console.log('FaceID is supported', biometryType);
    } else if (available && biometryType === ReactNativeBiometrics.Biometrics) {
      console.log('Biometrics is supported', biometryType);
    } else {
      return console.log('Biometrics not supported', biometryType);
    }
    let {success, error} = await ReactNativeBiometrics.simplePrompt({
      promptMessage: 'Sign in with Touch ID',
      // cancelButtonText: 'Close',
    });
    console.log({success, error});
    if(success){
      // console.log("Success");
      navigation.navigate('Signin')
    }
  };
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={()=>{isBiometricSupport()}}>
            <Text style={styles.textStyle}>Scan Your Finger</Text>
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

export default Fingerprint;