import React from 'react';
import{
    View,
    Text,
    StyleSheet
} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Activity from './Activity';
import Quizzes from './Quizzes';

const Drawer = createDrawerNavigator();

function HomeScreen() {
  return (
  <Drawer.Navigator>
    <Drawer.Screen name="Activity" component={Activity} />
    <Drawer.Screen name="Quizzes" component={Quizzes} />
  </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        fontSize: 30,
        color:'black'
    }
});

export default HomeScreen;