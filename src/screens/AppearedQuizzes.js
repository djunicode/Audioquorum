import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Footer from '../components/Footer';


const DATA = [
  {
    id: '1',
    time: '1.08 pm',
    title: 'Grammar Quiz',
    subject: 'ENGLISH',
    due: 'due Apr 15',
  },
  {
    id: '2',
    time: '1.08 pm',
    title: 'Grammar Quiz',
    subject: 'ENGLISH',
    due: 'due Apr 15',
  },
  {
    id: '3',
    time: '1.08 pm',
    title: 'Grammar Quiz',
    subject: 'ENGLISH',
    due: 'due Apr 15',
  },
  {
    id: '4',
    time: '1.08 pm',
    title: 'Grammar Quiz',
    subject: 'ENGLISH',
    due: 'due Apr 15',
  },
];

function AppearedQuizzes({navigation}) {

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('QuizPage',
            {
              title: item.title,
              subject: item.subject,
            })
        }}>
        <View style={styles.scheduleQuizContainer}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ justifyContent: 'center' }}>
              <Text style={styles.textStyle}>{item.time}</Text>
            </View>

            <View style={{ marginLeft: wp('3%') }}>
              <Text style={{ ...styles.textStyle, fontFamily: 'Poppins-SemiBold' }}>{item.title}</Text>
              <Text style={styles.textStyle}>{item.due}</Text>
              <Text style={styles.textStyle}>Subject: {item.subject}</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ justifyContent: 'center', marginRight:wp('4%') }}>
                <Text style={styles.textStyle}>24/25</Text>
            </View>
            <View>
              <MaterialCommunityIcons
                name="speaker-wireless"
                size={40}
                color={'#1D1042'}
              />
            </View>
          </View>
        </View>
      </TouchableOpacity >
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <Footer />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent:'space-between'
  },
  scheduleQuizContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    paddingLeft: wp('3%'),
    paddingRight: wp('3%'),
    paddingVertical: hp('1.5%'),
  },
  textStyle: {
    fontSize: 15,
    color: 'black',
    fontFamily: 'Poppins',
  },
 
});

export default AppearedQuizzes