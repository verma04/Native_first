import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainStackNavigator, ContactStackNavigator } from "./StackNavigator";
import { AntDesign } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen options={{ tabBarIcon: ({ color, size }) => (
           <AntDesign name="home" size={24} color="black" />
          ) }}  name="Home" component={MainStackNavigator} />
      <Tab.Screen 
       options={{ tabBarIcon: ({ color, size }) => (
        <AntDesign name="contacts" size={24} color="black" />
       ) }}
      
      name="Contact" component={ContactStackNavigator} />
    </Tab.Navigator>
  );
};
export default BottomTabNavigator;