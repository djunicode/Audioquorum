import React, { useEffect, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as AuthProvider } from './src/context/AuthContext.js';
import { Context as AuthContext } from './src/context/AuthContext';
import Splash from './src/screens/Splash.js';
import Subjects from './src/screens/Subjects.js';
import Signin from './src/screens/Signin.js';
import Signup from './src/screens/Signup.js';
import HomeScreen from './src/screens/HomeScreen.js';
import Scanner from './src/screens/Scanner.js';
import QuizPage from './src/screens/QuizPage.js';
import {
  AppState,
  View
} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthStack = createStackNavigator();


const Stack = createStackNavigator();
function App() {
  const { state } = useContext(AuthContext);
  function AuthFlow() {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Splash"
          component={Splash}
        />
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Signin"
          component={Signin}
        />
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Scanner"
          component={Scanner}
        />
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Signup"
          component={Signup}
        />
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="HomeScreen"
          component={HomeScreen}
        />
        <AuthStack.Screen
          options={{ headerShown: true, headerBackground: () => (<View style={{ backgroundColor: '#1D1042', height: 60 }}></View>), headerTintColor: 'white' }}
          name="QuizPage"
          component={QuizPage}
        />
      </AuthStack.Navigator>
    );
  }

  function HomeFlow() {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="HomeScreen"
          component={HomeScreen}
        />
        <AuthStack.Screen
          options={{ headerShown: true, headerBackground: () => (<View style={{ backgroundColor: '#1D1042', height: 60 }}></View>), headerTintColor: 'white' }}
          name="QuizPage"
          component={QuizPage}
        />
      </AuthStack.Navigator>
    );
  }



  return (
    <NavigationContainer>
      <Stack.Navigator>
        {state.token == '' ? (

          <Stack.Screen
            options={{ headerShown: false }}
            name="Auth"
            component={AuthFlow}
          />
        ) : (
          <Stack.Screen
            options={{ headerShown: false }}
            name="Home"
            component={HomeFlow}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};