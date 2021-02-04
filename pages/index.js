import React from "react";
import store from '../store/store';
import { Provider } from "react-redux";
import Screen from './Screen'
const App = () => {
  return (


    <Provider store={store}>
  
  <Screen/>

    
    </Provider>
  );
};
export default App;