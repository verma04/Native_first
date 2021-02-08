import React, { useState, useEffect } from 'react';
import store from '../store/store';
import { Provider } from "react-redux";
import Screen from './Screen';
import AsyncStorage from '@react-native-community/async-storage'
import jwt_decode from "jwt-decode";
import {  setCurrentUser } from '../store/actons/UserAction'
const App = () => {

  
  useEffect(async () => {
    
    let  token = await AsyncStorage.getItem('jwtToken') 
 
     
    const decoded = jwt_decode(token);
   console.log(decoded)

   store.dispatch(setCurrentUser(decoded));

    
}, [AsyncStorage]);

  return (


    <Provider store={store}>
  
  <Screen/>

    
    </Provider>
  );
};
export default App;