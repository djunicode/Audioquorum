import React, { useState ,useEffect} from 'react'
import {
    View,
    Text,
    StyleSheet,
    useWindowDimensions
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Checkbox } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Footer from '../components/Footer';
import AsyncStorage from '@react-native-async-storage/async-storage';


function QuizPage({ route }) {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [duration,setDuration]=useState(120);
    const [checkedA, setCheckedA] = useState(false);
    const [checkedB, setCheckedB] = useState(false);
    const [checkedC, setCheckedC] = useState(false);
    const [checkedD, setCheckedD] = useState(false);
    const [answer,setAnswer]= useState([]);
    const [current,setCurrent]=useState(0);
    const [completed,setCompleted]=useState(false);
    const [rtime,setRtime]=useState(119);

  const getQuizData = async () => {
    var token = await AsyncStorage.getItem('token');
    // console.log(token);
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
        "testId": route.params.testid
    });

    var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    try {
      const response = await fetch("https://audioquorum-api.herokuapp.com/api/test/start", requestOptions);
      const json = await response.json();
      console.log(json.data);
      setDuration(json.data.duration);
      setData(json.data);
      setRtime(json.data.duration-1)
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  const sendQuizMarks = async (mark) => {
    console.log(mark);
    var token = await AsyncStorage.getItem('token');
    // console.log(token);
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
        "testId": route.params.testid,
        "marks": mark
      });

    var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    try {
      const response = await fetch("https://audioquorum-api.herokuapp.com/api/test/end", requestOptions);
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }


    const submitAnswer=()=>{
        console.log(answer);
        let markk=0;
        for(let i=0;i<data.totalQuestions;i++){
            if(answer[i]==data.questionIds[i].correctAnswer){
                // console.log("Yes");
                markk+=data.questionIds[i].marks;
            }
        }
        // console.log(marks);
        sendQuizMarks(markk);
        setCompleted(true);
    }
    const timerr=()=>{
        setTimeout(() => {
            setCompleted(true);
        }, duration*1000);
    }
    useEffect(() => {
        setCompleted(false);
        getQuizData();
        timerr();
        let counter=0;
        let oneSecInterval = setInterval(()=>{
            // console.log(counter);
            counter++;
            setRtime(timee=>(timee-1));
            if(counter==duration){
                clearInterval(oneSecInterval);
            }
        },1000);
      }, []);
    return (
        <View style={styles.container}>
            {
            !!(data.totalQuestions>0)&&
             completed===false && !isLoading &&(
            <>
            <View style={{ alignItems: 'center' }}>
                <View style={{ ...styles.titleContainer, height: hp('4%') }}>
                    <Text style={styles.textStyle}>{route.params.title.toUpperCase()}</Text>
                    {/* <Text style={styles.textStyle}>{route.params.testid.toUpperCase()}</Text> */}
                </View>
                <View style={{ flexDirection: 'row', marginTop: hp('3%') }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.textStyle}>SUBJECT: </Text>
                        <View style={{ ...styles.titleContainer, width: wp('20%'), marginTop: 0 }}>
                            <Text style={styles.textStyle}>{data.subject}</Text>
                        </View>

                    </View>
                    <View style={{ flexDirection: 'row', marginLeft: wp('4%') }}>
                        <Text style={styles.textStyle}>MARKS: </Text>
                        <View style={{ ...styles.titleContainer, width: wp('7%'), marginTop: 0 }}>
                            <Text style={styles.textStyle}>{data.totalMarks}</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', marginLeft: wp('4%') }}>
                        <Text style={styles.textStyle}>QSTNS: </Text>
                        <View style={{ ...styles.titleContainer, width: wp('7%'), marginTop: 0 }}>
                            <Text style={styles.textStyle}>{data.totalQuestions}</Text>
                        </View>
                    </View>
                </View>
            </View>
            
           
                    <View style={styles.questionContainer}>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginRight: 10, marginTop: 10 }}>
                    <Text style={styles.textStyle}>Time Left: </Text>
                    <View style={{ borderColor: 'red', height: hp('4%'), width: 50, borderWidth: 2, borderRadius: 5,alignItems:'center' }}>
                        <Text style={{ ...styles.textStyle, color: 'red'}}>{rtime}</Text>
                    </View>
                </View>
                <View style={{ marginTop: hp('2.5%') }}>
                    <Text style={styles.questionTextStyle}>{data.questionIds[current].questionNo} {data.questionIds[current].question}
                    </Text>
                </View>
                <View style={{ marginLeft: wp('4%'), marginTop: hp('2.5%') }}>
                    <Text style={styles.textStyle}>Options: </Text>
                    <View style={{ marginLeft: wp('10%'), marginTop: hp('1.5%') }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.textStyle}>a.</Text>
                            <Text style={{ ...styles.textStyle, marginLeft: wp('7%') }}>{data.questionIds[current].optionA}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 7 }}>
                            <Text style={styles.textStyle}>b.</Text>
                            <Text style={{ ...styles.textStyle, marginLeft: wp('7%') }}>{data.questionIds[current].optionB}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 7 }}>
                            <Text style={styles.textStyle}>c.</Text>
                            <Text style={{ ...styles.textStyle, marginLeft: wp('7%') }}>{data.questionIds[current].optionC}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 7 }}>
                            <Text style={styles.textStyle}>d.</Text>
                            <Text style={{ ...styles.textStyle, marginLeft: wp('7%') }}>{data.questionIds[current].optionD}</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ marginLeft: wp('4%'), marginTop: hp('1.5%') }}>
                <Text style={styles.textStyle}>Select Answer:</Text>
                <View style={{ flexDirection: 'row', marginTop: hp('1%'), justifyContent: 'space-between', marginRight: 10 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ ...styles.textStyle, marginTop: hp('0.7%') }}>A</Text>
                        <Checkbox
                            status={checkedA ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setCheckedA(!checkedA);
                                setCheckedB(false);
                                setCheckedC(false);
                                setCheckedD(false);
                                answer[current]=(data.questionIds[current].optionA);
                                console.log(answer[current]);
                            }}
                            color={'#1D1042'}
                            uncheckColor={'red'}
                        />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ ...styles.textStyle, marginTop: hp('0.7%') }}>B</Text>
                        <Checkbox
                            status={checkedB ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setCheckedB(!checkedB);
                                setCheckedA(false);
                                setCheckedC(false);
                                setCheckedD(false);
                                answer[current]=(data.questionIds[current].optionB);
                                console.log(answer[current]);
                            }}
                            color={'#1D1042'}
                            uncheckColor={'red'}
                        />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ ...styles.textStyle, marginTop: hp('0.7%') }}>C</Text>
                        <Checkbox
                            status={checkedC ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setCheckedC(!checkedC);
                                setCheckedA(false);
                                setCheckedB(false);
                                setCheckedD(false);
                                answer[current]=(data.questionIds[current].optionC);
                                console.log(answer[current]);
                            }}
                            color={'#1D1042'}
                            uncheckColor={'red'}
                        />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ ...styles.textStyle, marginTop: hp('0.7%') }}>D</Text>
                        <Checkbox
                            status={checkedD ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setCheckedD(!checkedD);
                                setCheckedA(false);
                                setCheckedB(false);
                                setCheckedC(false);
                                answer[current]=(data.questionIds[current].optionD);
                                console.log(answer[current]);
                            }}
                            color={'#1D1042'}
                            uncheckColor={'red'}
                        />
                    </View>

                </View>
            </View>
               

            
            <View style={{ marginLeft: wp('4%'), marginTop: hp('4%'), flexDirection: 'row', justifyContent: 'space-between', marginRight: wp('4%') }}>
                
                <TouchableOpacity style={styles.buttonStyle} 
                onPress={()=>{
                    if(current>0)
                        setCurrent(current-1);
                }}>
                    <Text style={styles.textStyle}>Previous</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonStyle} 
                onPress={()=>{
                    if(current<data.totalQuestions-1){
                        setCurrent(current+1);
                    }
                }}>
                    <Text style={styles.textStyle}>Next</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonStyle} 
                onPress={()=>{
                    submitAnswer();
                }}>
                    <Text style={styles.textStyle}>Submit</Text>
                </TouchableOpacity>

            </View>
            </>)
            }

            {completed && (
                <View style={styles.container}>
                    <Text>Quiz Submitted!</Text>
                </View>
            )}
            
            <Footer />
        </View>
    );

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'space-between'
    },
    textStyle: {
        fontSize: 15,
        color: 'black',
        fontFamily: 'Poppins-SemiBold',
    },
    titleContainer: {
        height: hp('3%'),
        width: wp('55%'),
        backgroundColor: '#FFF8F1',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: hp('3%'),
        borderRadius: 5,
    },
    questionContainer: {
        // height: hp('42%'),
        width: wp('100%'),
        backgroundColor: '#FFF8F1',
        marginTop: hp('2%'),
    },
    questionTextStyle: {
        fontSize: 20,
        color: 'black',
        fontFamily: 'Poppins-SemiBold',
        textAlign: 'center',
    },
    buttonStyle: {
        height: hp('3%'),
        width: 80,
        borderRadius: 5,
        alignItems: 'center',
        backgroundColor: '#FFF8F1',
        elevation: 2
    },

});



export default QuizPage