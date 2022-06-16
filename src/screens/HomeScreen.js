import React from 'react';
import{
    View,
    Text,
    StyleSheet
} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Activity from './Activity';
import Quizzes from './Quizzes';
import Subjects from './Subjects';
import Settings from './Settings';
import Profile from './Profile';
import Logout from './Logout';

const Drawer = createDrawerNavigator();

function HomeScreen() {
  return (
  <Drawer.Navigator>
    <Drawer.Screen name="Activity" component={Activity}
        options={{
            title:'Activity',
            drawerLabelStyle:{color:'#1D1042'},
            headerTintColor:'white',
            headerStyle: {
                height: 70, 
                backgroundColor:'#1D1042',
              },
            drawerIcon: ({focused, size}) => (
               <AntDesign
                  name="filetext1"
                  size={40}
                  color={focused ? '#1D1042' : '#1D1042'}
               />
            ),
         }}
    />
    <Drawer.Screen name="Quizzes" component={Quizzes}
        options={{
            title:'Quizzes',
            drawerLabelStyle:{color:'#1D1042'},
            headerTintColor:'white',
            headerStyle: {
                height: 70, 
                backgroundColor:'#1D1042',
              },
            drawerIcon: ({focused, size}) => (
               <MaterialCommunityIcons
                  name="playlist-check"
                  size={40}
                  color={focused ? '#1D1042' : '#1D1042'}
               />
            ),
         }}
    />
    <Drawer.Screen name="Subjects" component={Subjects}
        options={{
            title:'Subjects',
            drawerLabelStyle:{color:'#1D1042'},
            headerTintColor:'white',
            headerStyle: {
                height: 70, 
                backgroundColor:'#1D1042',
              },
            drawerIcon: ({focused, size}) => (
               <FontAwesome5
                  name="book"
                  size={40}
                  color={focused ? '#1D1042' : '#1D1042'}
               />
            ),
         }}
    />
    <Drawer.Screen name="Settings" component={Settings}
        options={{
            title:'Settings',
            drawerLabelStyle:{color:'#1D1042'},
            headerTintColor:'white',
            headerStyle: {
                height: 70, 
                backgroundColor:'#1D1042',
              },
            drawerIcon: ({focused, size}) => (
               <Ionicons
                  name="settings"
                  size={40}
                  color={focused ? '#1D1042' : '#1D1042'}
               />
            ),
         }}
    />
    <Drawer.Screen name="Profile" component={Profile}
        options={{
            title:'Profile',
            drawerLabelStyle:{color:'#1D1042'},
            headerTintColor:'white',
            headerStyle: {
                height: 70, 
                backgroundColor:'#1D1042',
              },
            drawerIcon: ({focused, size}) => (
               <Ionicons
                  name="person-circle-outline"
                  size={40}
                  color={focused ? '#1D1042' : '#1D1042'}
               />
            ),
         }}
    />
    <Drawer.Screen name="Logout" component={Logout}
        options={{
            title:'Log Out',
            drawerLabelStyle:{color:'#1D1042'},
            headerTintColor:'white',
            headerStyle: {
                height: 70, 
                backgroundColor:'#1D1042',
              },
            drawerIcon: ({focused, size}) => (
               <MaterialIcons
                  name="logout"
                  size={40}
                  color={focused ? '#1D1042' : '#1D1042'}
               />
            ),
         }}
    />
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