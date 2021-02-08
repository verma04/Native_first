
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native'
import { connect } from "react-redux";
import MainStackNavigator  from './screens/auth.js/authnavigator'
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./navigation/DrawerNavigator";
import Auth from './screens/auth.js/authnavigator'
import AsyncStorage from '@react-native-community/async-storage'
import jwt_decode from "jwt-decode";
import {  setCurrentUser } from '../store/actons/UserAction'

const main = ({ navigation , auth }) => {



  if(auth.isAuthenticated === false){
    return(
      <NavigationContainer>
<Auth/>
</NavigationContainer>
    )
  }

  
    return (
        <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    )
}

const mapStateToProps = state => ({
  auth: state.auth,

});

export default connect(
  mapStateToProps,
  { }
)(main);
