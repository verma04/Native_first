import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import auth from './authreducer'
export default combineReducers({
  auth: auth,
  errors: errorReducer,
});