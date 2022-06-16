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

const questions = [
    {
      no: 1,
      question: "Q1. FIND OUT THE FIGURE OF SPEECH IN THE FOLLOWING SENTENCE: “AS BUSY AS A BEE”",
      optionA:"SIMILE",
      optionB:"METAPHOR",
      optionC:"ALLITERATION",
      optionD:"INTERROGATION",
      marks:"5",
    },
    {
        no: 2,
        question: 'Q2 This is question 2',
        optionA:"A",
        optionB:"B",
        optionC:"C",
        optionD:"D",
        marks:"5",
      },
      {
        no: 3,
        question: 'Q3 This is question 3',
        optionA:"A",
        optionB:"B",
        optionC:"C",
        optionD:"D",
        marks:"5",
      },
      {
        no: 4,
        question: 'Q4 This is question 4',
        optionA:"A",
        optionB:"B",
        optionC:"C",
        optionD:"D",
        marks:"5",
      },
  ];

function QuizPage({ route }) {
    
    const [checkedA, setCheckedA] = useState(false);
    const [checkedB, setCheckedB] = useState(false);
    const [checkedC, setCheckedC] = useState(false);
    const [checkedD, setCheckedD] = useState(false);
    const [current,setCurrent]=useState(0);
    const [completed,setCompleted]=useState(false);

    const submitAnswer=()=>{
        setCompleted(true);
    }
    const timerr=()=>{
        setTimeout(() => {
            setCompleted(true);
        }, 30000);
    }
    useEffect(() => {
        timerr();
      }, []);
    return (
        <View style={styles.container}>
            {!!(questions.length>0)&& completed===false &&(
            <>
            <View style={{ alignItems: 'center' }}>
                <View style={{ ...styles.titleContainer, height: hp('4%') }}>
                    <Text style={styles.textStyle}>{route.params.title.toUpperCase()}</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: hp('3%') }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.textStyle}>SUBJECT: </Text>
                        <View style={{ ...styles.titleContainer, width: wp('20%'), marginTop: 0 }}>
                            <Text style={styles.textStyle}>{route.params.subject}</Text>
                        </View>

                    </View>
                    <View style={{ flexDirection: 'row', marginLeft: wp('4%') }}>
                        <Text style={styles.textStyle}>MARKS: </Text>
                        <View style={{ ...styles.titleContainer, width: wp('7%'), marginTop: 0 }}>
                            <Text style={styles.textStyle}>10</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', marginLeft: wp('4%') }}>
                        <Text style={styles.textStyle}>QSTNS: </Text>
                        <View style={{ ...styles.titleContainer, width: wp('7%'), marginTop: 0 }}>
                            <Text style={styles.textStyle}>4</Text>
                        </View>
                    </View>
                </View>
            </View>
            
           
                    <View style={styles.questionContainer}>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginRight: 10, marginTop: 10 }}>
                    <Text style={styles.textStyle}>Time Left: </Text>
                    <View style={{ borderColor: 'red', height: hp('4%'), width: 50, borderWidth: 2, borderRadius: 5,alignItems:'center' }}>
                        <Text style={{ ...styles.textStyle, color: 'red'}}>10:00</Text>
                    </View>
                </View>
                <View style={{ marginTop: hp('2.5%') }}>
                    <Text style={styles.questionTextStyle}>{questions[current].question}
                    </Text>
                </View>
                <View style={{ marginLeft: wp('4%'), marginTop: hp('2.5%') }}>
                    <Text style={styles.textStyle}>Options: </Text>
                    <View style={{ marginLeft: wp('10%'), marginTop: hp('1.5%') }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.textStyle}>a.</Text>
                            <Text style={{ ...styles.textStyle, marginLeft: wp('7%') }}>{questions[current].optionA}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 7 }}>
                            <Text style={styles.textStyle}>b.</Text>
                            <Text style={{ ...styles.textStyle, marginLeft: wp('7%') }}>{questions[current].optionB}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 7 }}>
                            <Text style={styles.textStyle}>c.</Text>
                            <Text style={{ ...styles.textStyle, marginLeft: wp('7%') }}>{questions[current].optionC}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 7 }}>
                            <Text style={styles.textStyle}>d.</Text>
                            <Text style={{ ...styles.textStyle, marginLeft: wp('7%') }}>{questions[current].optionD}</Text>
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
                    if(current<questions.length-1)
                    setCurrent(current+1)
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
                <Text>Quiz Submitted!</Text>
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