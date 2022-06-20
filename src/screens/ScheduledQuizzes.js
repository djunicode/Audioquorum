import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Footer from '../components/Footer';
import AsyncStorage from '@react-native-async-storage/async-storage';



function ScheduledQuizzes({ navigation }) {


  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);


  const getScheduledQuizzes = async () => {
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
      const response = await fetch("https://audioquorum-api.herokuapp.com/api/test/view/standard", requestOptions);
      const json = await response.json();
      setData(json.tests);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getScheduledQuizzes();
  }, [])

  const renderItem = ({ item, index }) => {
    // console.log(index);
    return (

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('QuizPage',
            {
              title: item.name,
              subject: item.subject
            })
        }}>
        <View style={styles.scheduleQuizContainer}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ justifyContent: 'center' }}>
              <Text style={styles.textStyle}>{item.time}</Text>
            </View>

            <View style={{ marginLeft: wp('3%') }}>
              <Text style={{ ...styles.textStyle, fontFamily: 'Poppins-SemiBold' }}>{item.name}</Text>
              <Text style={styles.textStyle}>Due: {item.date}</Text>
              <Text style={styles.textStyle}>Subject: {item.subject}</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ justifyContent: 'center' }}>
              <View style={styles.buttonStyle}>
                <Text style={styles.textStyle}>Start Quiz</Text>
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
      </TouchableOpacity >
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
  },
  buttonStyle: {
    height: hp('3%'),
    width: 80,
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: '#FFF8F1',
    elevation: 2,
    marginRight: wp('3%'),
  },
});

export default ScheduledQuizzes