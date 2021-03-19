
import store from '../store/store';
import { Provider } from "react-redux";
import Screen from './Screen';
import AsyncStorage from '@react-native-community/async-storage'
import jwt_decode from "jwt-decode";
import {  setCurrentUser } from '../store/actons/UserAction'




import React, { Component } from 'react'

export default class index extends Component {

   async componentDidMount    (){

    let  token = await AsyncStorage.getItem('jwtToken')

    const decoded = jwt_decode(token);
    // store.dispatch(setCurrentUser(decoded));

    console.log(decoded)
  }

  render() {
   

    return (
 
          <Provider store={store}>
  
  <Screen/>

    
    </Provider>
 
    )
  }
}
