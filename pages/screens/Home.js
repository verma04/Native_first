import React, { useState, useEffect } from 'react';
import { View, Button, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { loginUser, logoutUser} from '../../store/actons/UserAction'
const Home = ({ navigation , auth : {user}  , logoutUser }) => {
 
  useEffect(async () => {
    
    console.log(user)
    
});

  return (
    <View style={styles.center}>
      <Text>This is the home screen{user.email}</Text>
      <Button
        title="Go to About Screen"
        onPress={() => logoutUser()} // We added an onPress event which would navigate to the About screen
      />
    </View>
  );
};
const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});
const mapStateToProps = state => ({
  auth: state.auth,

});

export default connect(
  mapStateToProps,
  {  logoutUser }
)(Home); 