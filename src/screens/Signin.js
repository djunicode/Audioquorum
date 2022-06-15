import React, { useState, useContext } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from 'react-native-responsive-screen';
import Input from '../components/Input';
const colour = '#1D1042';
import { Context as AuthContext } from '../context/AuthContext';


function Signin({ navigation }) {
  const { state, signin } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container1}><Text style={styles.header}>Audioquorum</Text></View>
      <View style={styles.container}>
        <Text style={styles.title}>LOG-IN</Text>
        <View style={{ ...styles.inputContainer, marginTop: 40 }}>
          <Input
            placeholder="Username"
            placeholderTextColor='black'
            keyboardType="email-address"
            autoCompleteType="username"
            autoCapitalize="none"
            value={username}
            onChangeText={text => setUsername(text)}
          />
        </View>
        <View style={{ ...styles.inputContainer, marginTop: 20 }}>
          <Input
            placeholderTextColor='black'
            secureTextEntry={true}
            placeholder="Password"
            autoCompleteType="password"
            autoCapitalize="none"
            value={password}
            onChangeText={text => setPassword(text)}
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
          <TouchableOpacity style={{ alignItems: 'center', paddingTop: 6 }}
            onPress={() => {
              signin({ username, password });
            }}>
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
    height: hp('20%'),
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
    elevation: 10,
  },
  header: {
    textAlign: 'left',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 35,
  },
  title: {
    color: '#1D1042',
    textAlign: 'center',
    fontSize: 40,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    height: 60,
    width: wp('85%'),
    borderColor: '#1D1042',
    borderWidth: 1
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
  }
});

export default Signin