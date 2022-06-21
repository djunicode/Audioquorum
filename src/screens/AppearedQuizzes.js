import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Footer from '../components/Footer';
import AsyncStorage from '@react-native-async-storage/async-storage';



function AppearedQuizzes({ navigation }) {


  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);


  const getAppearedQuizzes = async () => {
    var token = await AsyncStorage.getItem('token');
    // console.log(token + " getScheduledQuizzesToken");

    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    try {
      const response = await fetch("https://audioquorum-api.herokuapp.com/api/test/view/attempted", requestOptions);
      const json = await response.json();
      console.log(json.attemptedTests);
      setData(json.attemptedTests);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getAppearedQuizzes();
  }, [])

  const renderItem = ({ item, index }) => {
    // console.log(index);
    return (
        <View style={styles.scheduleQuizContainer}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ justifyContent: 'center' }}>
              <Text style={styles.textStyle}>{item.testId.time}</Text>
              <Text style={styles.textStyle}>{item.testId.duration} sec</Text>
            </View>

            <View style={{ marginLeft: wp('3%') }}>
              <Text style={{ ...styles.textStyle, fontFamily: 'Poppins-SemiBold' }}>{item.testId.name}</Text>
              <Text style={styles.textStyle}>Due: {item.testId.date}</Text>
              <Text style={styles.textStyle}>Subject: {item.testId.subject}</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ justifyContent: 'center' }}>
              <View style={styles.buttonStyle}>
                <Text style={styles.textStyle}>{item.marksObtained}/{item.testId.totalMarks}</Text>
              </View>
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
    );
  }




  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (<FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item._id}
      />)}

      <Footer />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between'
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
    marginLeft:2,
  },
  buttonStyle: {
    height: hp('3%'),
    width: wp('15%'),
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: '#FFF8F1',
    elevation: 2,
    marginRight: wp('3%'),
  },
});

export default AppearedQuizzes;