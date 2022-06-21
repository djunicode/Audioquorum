import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Boxes from '../components/Boxes';
import Footer from '../components/Footer';


function Subjects() {

    useEffect(() => {
        getSubjects();
    }, [])


    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const getSubjects = async () => {
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
            const response = await fetch("https://audioquorum-api.herokuapp.com/api/test/viewAllSubjects", requestOptions);
            const json = await response.json();
            // console.log(json.data);
            setData(json.data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }

    }

    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
            {isLoading ? (<ActivityIndicator />):(
                data.map((item, index) => {
                    console.log(item);
                    return (
                        <Boxes key={index} subjectName={item} />
                    );
                }
            ))}
            </View>

            <Footer />
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
       
    },
    innerContainer:{
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'center'
    }
});

export default Subjects;