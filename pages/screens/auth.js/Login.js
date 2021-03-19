import React , {useState} from "react";
import { Platform, StyleSheet, Text,  TextInput, TouchableOpacity, View} from "react-native";
import { connect } from "react-redux";
import { loginUser} from '../../../store/actons/UserAction';

const Login = ({ loginUser , errors }) => {

  console.log(errors)

  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const login = () => {

    const data = {
      email: email,
      password: password
    }
    loginUser(data)
  };

  const  handleEmail = text => {
    setemail( text );
   
  };
  const  handlepassword = text => {
    setpassword( text );
   
  };

  return (

    

      <View style={styles.container}>
         <TextInput
           style={styles.input}
           underlineColorAndroid="transparent"
           placeholder="Email"
           placeholderTextColor="black"
           autoCapitalize="none"
         
           onChangeText={handleEmail}
         />
            <Text>{errors.email}</Text>
         <Text>{errors.emailnotfound}</Text>
       
         <TextInput
           style={styles.input}
           style={styles.input}
           underlineColorAndroid="transparent"
           placeholder="Password"
           placeholderTextColor="black"
           autoCapitalize="none"
           secureTextEntry={true} 
        
           onChangeText={e => setpassword(e.target.password)}
         onChangeText={handlepassword}
         />
         <Text>{errors.passwordincorrect}</Text>
         <Text>{errors.password}</Text>
         <TouchableOpacity
           style={styles.submitButton}
           onPress={login}
         >
           <Text style={styles.submitButtonText}> Submit </Text>
         </TouchableOpacity>
       
       </View>
     
 
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: "black",
    borderWidth: 1
  },
  submitButton: {
    backgroundColor: "black",
    padding: 10,
    margin: 15,
    alignItems: "center",
    height: 40
  },
  submitButtonText: {
    color: "white"
  }
});
const mapStateToProps = state => ({
  auth: state.auth,
  errors:state.errors

});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
