import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    useWindowDimensions
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

function QuizPage({ route }) {
    return (
        <View style={styles.container}>
            <View style={{ alignItems: 'center' }}>
                <View style={{...styles.titleContainer, height:hp('4%')}}>
                    <Text style={styles.textStyle}>{route.params.title.toUpperCase()}</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop:hp('3%') }}>
                    <View style={{ flexDirection: 'row'}}>
                        <Text style={styles.textStyle}>SUBJECT: </Text>
                        <View style={{...styles.titleContainer, width:wp('20%'), marginTop:0}}>
                            <Text style={styles.textStyle}>{route.params.subject}</Text>
                        </View>

                    </View>
                    <View style={{ flexDirection: 'row', marginLeft:wp('4%') }}>
                        <Text style={styles.textStyle}>MARKS: </Text>
                        <View style={{...styles.titleContainer, width:wp('7%'), marginTop:0}}>
                            <Text style={styles.textStyle}>10</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', marginLeft:wp('4%') }}>
                        <Text style={styles.textStyle}>QSTNS: </Text>
                        <View style={{...styles.titleContainer, width:wp('7%'), marginTop:0}}>
                            <Text style={styles.textStyle}>10</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
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
    }
});



export default QuizPage