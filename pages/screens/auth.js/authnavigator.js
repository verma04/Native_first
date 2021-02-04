import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import  Regsiter from './Regsiter'

const Stack = createStackNavigator();

const Auth = () => {
  return (
   
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Regsiter" component={Regsiter} />
      </Stack.Navigator>
 
  );
};

export default Auth;