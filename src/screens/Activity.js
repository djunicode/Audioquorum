import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import {widthPercentageToDP as wp,heightPercentageToDP as hp,} from 'react-native-responsive-screen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const DATA = [
  {
    id: '1',
    time:'1.08 pm',
    title: 'Grammar Quiz Scheduled',
  },
  {
    id: '2',
    time:'1.08 pm',
    title: 'Grammar Quiz Scheduled',
  },
  {
    id: '3',
    time:'1.08 pm',
    title: 'Grammar Quiz Scheduled',
  },
  {
    id: '4',
    time:'1.08 pm',
    title: 'Grammar Quiz Scheduled',
  },
];

function Activity(){
  const renderItem = ({ item }) => (
  <View style={styles.item}>
    <Text style={{...styles.time,marginRight:15}}>{item.time}</Text>
    <View style={{flexDirection:'column'}}>
        <Text style={styles.text}>{item.title}</Text>
        <Text style={styles.time}>due 15 Apr</Text>
        <Text style={styles.time}>Subject: ENGLISH</Text>
    </View>
    <MaterialCommunityIcons
                  name="speaker-wireless"
                  size={40}
                  color={'#1D1042'}
    />
  </View>
  );
    
    return(
    <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
    </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white',
      },
      item: {
        width:wp('100%'),
        flexDirection:'row',
        backgroundColor: 'white',
        paddingVertical: 10,
        paddingRight: 18,
        alignItems:'center',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
      },
      time:{
        fontSize:14,
        color:'#000000'
      },
      text: {
        color:'#000000',
        fontSize: 18,
        fontWeight:'600'
      },
});

export default Activity;