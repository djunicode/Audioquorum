import React,{useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as AuthProvider } from './src/context/AuthContext.js';
import { Context as AuthContext } from './src/context/AuthContext';
import Signin from './src/screens/Signin.js';
import Signup from './src/screens/Signup.js';
import HomeScreen from './src/screens/HomeScreen.js';
import Scanner from './src/screens/Scanner.js';
const AuthStack = createStackNavigator();
function AuthFlow() {
  return (
    <AuthStack.Navigator>
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
    </AuthStack.Navigator>
  );
}

const Stack = createStackNavigator();
function App() {

  const { state } = React.useContext(AuthContext);
  console.log(state);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {state.token === null ? (
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