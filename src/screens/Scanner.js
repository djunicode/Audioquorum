import React from 'react'
import{
    View,
    Text,
    StyleSheet,Image
} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import ReactNativeBiometrics from 'react-native-biometrics';
import {widthPercentageToDP as wp,heightPercentageToDP as hp,} from 'react-native-responsive-screen';


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
      <View style={styles.container1}>
        <Text style={styles.header}>Audioquorum</Text>
      </View>
        <TouchableOpacity onPress={()=>{isBiometricSupport()}} style={{marginTop:hp('20%')}}>
            <Image style={{height:146,width:127,alignSelf:'center'}} source={require('../utils/fingerprint.png')}/>
            <Text style={styles.textStyle}>Scan Your Finger</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white',
        alignItems: 'center'
    },
    textStyle: {
        fontSize: 28,
        color:'black'
    },
        container1: {
        justifyContent: 'center',
        height:hp('20%'),
        width:wp('100%'),
        paddingLeft: 15,
        backgroundColor: '#1D1042',
    },
    header: {
      textAlign: 'left',
      color: 'white',
      fontWeight: 'bold',
      fontSize:35,
    },
});

export default Fingerprint;