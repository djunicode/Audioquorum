import React from 'react'
import {
    View,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';


function Footer() {
    return (
        <TouchableOpacity>
            <View style={styles.footer}>
                <Ionicons
                    name='mic'
                    size={55}
                    color="#1D1042">
                </Ionicons>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    footer: {
        width: wp('100%'),
        height: hp('10%'),
        backgroundColor: '#FFF8F1',
        marginTop: hp('2%'),
        justifyContent: 'center',
        alignItems: 'center'
    },
});
export default Footer