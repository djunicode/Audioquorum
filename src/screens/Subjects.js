import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';

import Boxes from '../components/Boxes';


function Subjects(){

    return(
    <View style={styles.container}>
        <Boxes />
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white',
      },
});

export default Subjects;