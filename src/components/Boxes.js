import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

function Boxes(){
    return(
        <View style={styles.container}>
            <View style={styles.box}>
                <View style={styles.inner}>
                    <View style={styles.icon}>
                      <FontAwesome  name="puzzle-piece" size={50} color="#1d1042" />
                    </View>
                    <Text style={styles.text}>Mathematics</Text>
                </View>
            </View>
            <View style={styles.box}>
                <View style={styles.inner}>
                    <View style={styles.icon}>
                      <FontAwesome  name="puzzle-piece" size={50} color="#1d1042" />
                    </View>
                    <Text style={styles.text}>Mathematics</Text>
                </View>
            </View>
            <View style={styles.box}>
                <View style={styles.inner}>
                    <View style={styles.icon}>
                      <FontAwesome  name="puzzle-piece" size={50} color="#1d1042" />
                    </View>
                    <Text style={styles.text}>Mathematics</Text>
                </View>
            </View>
            <View style={styles.box}>
                <View style={styles.inner}>
                    <View style={styles.icon}>
                      <FontAwesome  name="puzzle-piece" size={50} color="#1d1042" />
                    </View>
                    <Text style={styles.text}>Mathematics</Text>
                </View>
            </View>
            <View style={styles.box}>
                <View style={styles.inner}>
                    <View style={styles.icon}>
                      <FontAwesome  name="puzzle-piece" size={50} color="#1d1042" />
                    </View>
                    <Text style={styles.text}>Mathematics</Text>
                </View>
            </View>
            <View style={styles.box}>
                <View style={styles.inner}>
                    <View style={styles.icon}>
                      <FontAwesome  name="puzzle-piece" size={50} color="#1d1042" />
                    </View>
                    <Text style={styles.text}>Mathematics</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create ({
    container: {
        width: '100%' ,
        height: '50%' ,
        padding: 20,
        paddingBottom: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',   
    },
    box: {
        width: '50%' ,
        height: '50%' ,
        padding: 10,
        paddingBottom: 10, 
    },
    inner: {
        flex: 1,
        borderRadius: 10,
        shadowColor:"#000",
        shadowRadius: 25,
        shadowOpacity: 0,
        elevation:10,
        backgroundColor: '#fff8f1',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        paddingTop: 10,
        color: "#1d1042"
    },
    icon: {
        paddingTop: 20,
        borderBottomColor: '#000',
        borderBottomWidth: 1,
    }
})

export default Boxes;