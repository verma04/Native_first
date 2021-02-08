import axios from "axios";
// import api from '../utils/api';
// import setAuthToken from "../utils/setAuthToken";
import jwt from "react-native-pure-jwt";
import setAuthToken from "../utils/setAuthToken";
import {  ToastAndroid, } from "react-native";
import AsyncStorage from '@react-native-community/async-storage'
import { GETCATEGORY , BOOKING_USER_LIST, GETLIST, BOOKING,  OTHERSER  , LIST_DET, GET_ERRORS ,  SET_CURRENT_USER } from "./types";
import { Alert } from "react-native";

import jwt_decode from "jwt-decode";
export const loginUser =   userData => async dispatch => {
   
    try {
        const res = await axios.post("http://3.138.89.242:5000/api/users/Applogin", userData)
        
       

        
        const  { token } = res.data;
        await AsyncStorage.setItem("jwtToken", token);
     console.log(token)
      
     var decoded = jwt_decode(token);
       dispatch(setCurrentUser(decoded));

        console.log(decoded)
    } catch (err) {
        // Handle Error Here
   
            dispatch({
              type: GET_ERRORS,
              payload: err.response.data
            })
          
    }
};

export const setCurrentUser = decoded => {
    return {
      type: SET_CURRENT_USER,
      payload: decoded
    };
  };


 
//     axios
//       .post("http://3.138.89.242:5000/api/users/login", userData)
//       .then(res => {
//         // Save to localStorage
  
//         // Set token to localStorage
//         const { token } = res.data;
//         // localStorage.setItem("jwtToken", token);
//         // // Set token to Auth header
//         // setAuthToken(token);
//         // // Decode token to get user data
//         // const decoded = jwt_decode(token);
//         //   const data =  "Welcome" + " " + decoded.name
//       console.log(token)
//           console.log(res.data)
          
//         // Set current user
//         // dispatch(setCurrentUser(decoded));
//         // toast.success(data);
  
//       })
//       .catch(err =>
//         dispatch({
//           type: GET_ERRORS,
//           payload: err.response.data
//         })
//       );
//   };

export const logoutUser = () => dispatch => {
  // Remove token from local storage
  
   AsyncStorage.removeItem('jwtToken');
  // Remove auth header for future requestss
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
 
};