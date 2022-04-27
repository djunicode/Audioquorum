import React from 'react';
import { View, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ScheduledQuizzes from './ScheduledQuizzes';
import AppearedQuizzes from './AppearedQuizzes';

function Quizzes() {
    const Tab = createMaterialTopTabNavigator();
    return (
        <Tab.Navigator>
            <Tab.Screen name="Scheduled" component={ScheduledQuizzes} />
            <Tab.Screen name="Appeared" component={AppearedQuizzes} />
        </Tab.Navigator>
    );
};

export default Quizzes;