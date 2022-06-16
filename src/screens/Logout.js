import React,{useContext, useState} from 'react';
import { View,StyleSheet, Text,TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from 'react-native-responsive-screen';
import Footer from '../components/Footer';
import { Context as AuthContext } from '../context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Logout(){

    const { signout } = useContext(AuthContext);
    const displayData = async ()=>{  
        try{  
          let token = await AsyncStorage.getItem("token");  
          alert(token);
          signout(token);  
        }  
        catch(error){  
          alert(error)  
        }  
    }
    return(
        <View style={styles.container}>
           <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
           <TouchableOpacity style={styles.buttonStyle} 
                onPress={()=>{
                    displayData();
                }}>
                    <Text style={styles.textStyle}>Log Out</Text>
                </TouchableOpacity>
            </View> 
        <Footer/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    textStyle: {
        fontSize: 25,
        color: 'black',
        fontFamily: 'Poppins-SemiBold',
    },
    buttonStyle: {
        // height: hp('3%'),
        width: wp('50%'),
        borderRadius: 5,
        alignItems: 'center',
        backgroundColor: '#FFF8F1',
        elevation: 2
    },
  });
export default Logout;