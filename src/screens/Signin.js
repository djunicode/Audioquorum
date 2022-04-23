import React,{useState} from 'react'
import{View,Text,StyleSheet,TextInput} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {widthPercentageToDP as wp,heightPercentageToDP as hp,} from 'react-native-responsive-screen';
import Input from '../components/Input';
const colour='#1D1042';

function Signin({navigation}) {
    const [username,setUsername]=useState('');
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container1}><Text style={styles.header}>Audioquorum</Text></View>
      <View style={styles.container}>
        <Text style={styles.desc}>Login to your account</Text>
        <View style={{ ...styles.inputContainer, marginTop: 40 }}>
            <TextInput
            style={styles.textInput}
            placeholder="Email"
            placeholderTextColor='black'
            keyboardType="email-address"
            autoCompleteType="email"
            autoCapitalize="none"
            value={username}
            onChangeText={text => setUsername(text)}
          />
        </View>
        <View style={{ ...styles.inputContainer, marginTop: 20 }}>
          <Input
            style={styles.textInput}
            placeholderTextColor='black'
            // secureTextEntry={!visible}
            placeholder="Password"
            autoCompleteType="password"
            autoCapitalize="none"
            // value={password}
            // onChangeText={text => setpassword(text)}
          />
        </View>

        <View style={styles.container2}>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Text style={{ color: 'black', marginLeft: 5, fontWeight: '700' }}>Forgot Password?</Text>
          </View>
          <View>
            <TouchableOpacity>
              <Text style={{ color: 'black', fontWeight: '700' }}>
                Remember me
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ ...styles.button, backgroundColor: colour }}>
          <TouchableOpacity style={{ alignItems: 'center',paddingTop:6 }}
            onPress={() => {}}>
            <Text style={{ fontSize: 22, color: 'white', fontWeight: '600' }}>LOG-IN</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 20 }}>   
          <TouchableOpacity onPress={() => { navigation.navigate('Scanner') }}>
              <Text style={{ color: 'grey', fontSize: 16 }}>Login Using FingerPrint</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container1: {
        justifyContent: 'center',
        height:hp('20%'),
        paddingLeft: 15,
        backgroundColor: '#1D1042',
    },
    mainContainer: {
        flex: 1,
        backgroundColor: '#FFF8F1',
      },
      container: {
        height: hp('70%'),
        width: wp('100%'),
        backgroundColor: 'white',
        alignSelf: 'center',
        alignItems: 'center',
        elevation:10,
      },
      header: {
        textAlign: 'left',
        color: 'white',
        fontWeight: 'bold',
        fontSize:35,
      },
      desc: {
        color: '#1A1B2F',
        textAlign: 'center',
        fontSize: wp('5%'),
        marginTop: 2,
      },
      textInput: {
        marginLeft: 5,
        backgroundColor: 'grey',
        fontSize: 15,
        color: 'black',
        paddingLeft: 10,
        fontWeight: '600',
        width:wp('70%')
      },
      inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'grey',
        // width: wp('80%'),
        borderRadius: 10,
        height: 60,
        width: wp('85%'),
      },
    
      container2: {
        flexDirection: 'row',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 30,
        justifyContent: 'space-evenly',
      },
      button: {
        marginTop: 40,
        width: wp('85%'),
        height: 50,
        borderRadius: 50,
      }
});

export default Signin