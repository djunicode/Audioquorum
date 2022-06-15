import AsyncStorage from '@react-native-async-storage/async-storage';
import createDataContext from './createDataContext';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'signout':
      return { token: '', username: '' };
    case 'signin':
    case 'signup':
      return {
        token: action.payload.token,
        username: action.payload.username,
      };
    default:
      return state;
  }
};

const signup = dispatch => {
  return ({ username, password }) => {
    console.log('Signup');
  };
};

const signin = dispatch => {
  return ({ username, password }) => {
    var token;
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "username": username,
      "password": password
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://audioquorum-api.herokuapp.com/api/auth/login", requestOptions)
      .then(response => response.json())
      .then((result) => {
        console.log(result.token);
        token = result.token;
        AsyncStorage.setItem('token', token);
      })
      .catch(error => console.log('error', error));
    // console.log('Signin');
    dispatch({
      type: 'signin',
      payload: {
        token: token,
        username,
      },
    });
  };
};

const signout = (dispatch) => {
  return ({token}) => {
    console.log(token + ' signout');
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch("https://audioquorum-api.herokuapp.com/api/auth/logout", requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
    AsyncStorage.removeItem('token');
    dispatch({ type: 'signout' });
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup },
  { token: '', username: '' },
);