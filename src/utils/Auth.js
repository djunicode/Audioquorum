import React from 'react';
const base_url='localhost:5001/api/';

const user={
  login:async (username, password) => {
    
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  var raw = JSON.stringify({
    "username": "vp",
    "password": "password12345"
  });
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  
    fetch(base_url+"auth/login/", requestOptions)
      .then(response => response.text())
      .then((result) => {
        console.log(result);
      })
      .catch(error => console.log('error', error));
  },

  logout:()=>{
    var requestOptions = {
      method: 'POST',
      redirect: 'follow'
    };
    
    fetch(base_url+"auth/logout", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }
}

export default user;