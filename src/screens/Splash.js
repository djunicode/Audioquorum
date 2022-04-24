import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground} from 'react-native';

import * as Animatable from 'react-native-animatable';

export default function Splash({ navigation }) {
  return (
    <Animatable.View duration={1100}>
    <View style={styles.container}>
    <View style={{paddingTop:150}}> 
     <Image style={styles.Image} source={require('../utils/splashimg.png')}/>
     </View>
     <Animatable.View>
     <TouchableOpacity style={styles.text} onPress={() => navigation.navigate('Signin')}> 
         <Text style={styles.text}>Audioquorum</Text>
     </TouchableOpacity>
     </Animatable.View>
    </View>
    </Animatable.View>
  )
};
  const styles = StyleSheet.create({
    container: {
      flex:1,     
     },
     Image:{
      height:300,
      width:300,
      alignSelf:'center',
      justifyContent:'center',
     },
     text: {
        position: "absolute",
        color: "#1d1042",
        paddingTop: 280,
        paddingLeft: 180,
        fontFamily: "Poppins",
        fontSize: 45,
        fontWeight: "bold",
        textAlign: "center",
        alignItems:'center',
     }
  })