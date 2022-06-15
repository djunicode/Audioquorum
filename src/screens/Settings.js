import React, {useContext} from 'react';
import {View,Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Context as AuthContext } from '../context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
function Settings(){
    const { state, signout } = useContext(AuthContext);
    async function handleSignout(){
        var token = await AsyncStorage.getItem('token');
        console.log(token+ " handleSignoutToken");
        signout({token});
    }
    return(
        <View>
            <TouchableOpacity
            onPress={()=>{handleSignout()}}>
                <Text style={{color:'black', margin:15}}>Logout</Text>
            </TouchableOpacity>
            
        </View>
    );
};

export default Settings;