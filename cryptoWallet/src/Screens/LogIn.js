import React from 'react';
import {useState} from 'react';
import {View, TextInput, Pressable,StyleSheet, Text, SafeAreaView} from 'react-native'
import {authentication} from '../../firebase/firebase-config'
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import {signInWithEmailAndPassword, signOut} from 'firebase/auth';
import { NavigationContainer, useNavigation } from '@react-navigation/native';



const LogIn = () => {

  const navigation = useNavigation()


  const [isSignedIn, setIsSignedIn] = useState(false);

  // text inputs state

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const RegisterUser = () => {

  //   createUserWithEmailAndPassword(authentication, email, password)
  //     .then(re => {
  //       console.log(re);
  //       setIsSignedIn(true);
  //     })
  //     .catch(re => {
  //       console.log(re);
  //     });
  // };

  const SignInUser = () => {
    signInWithEmailAndPassword(authentication, email, password)
      .then(re => {
        console.log(re);
        setIsSignedIn(true);
      })
      .catch(e => {
        console.log(e);
      });
  };

  // const SignOutUser = () => {
  //   signOut(authentication)
  //     .then(re => {
  //       console.log(re);
  //     })
  //     .catch(e => {
  //       console.log(e);
  //     });
  // };

  const handleNavigation=()=>{
    navigation.navigate('MyTabs')
  }

  return (
    <SafeAreaView>
    <View>
    <TextInput
    placeholder="Email"
    value={email}
    onChangeText={text => setEmail(text)}
        />
        <TextInput
          placeholder="Password"
          value={password}
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
        />

      <Pressable  style={styles.button} onPress={SignInUser}>
        <Text style={styles.buttonText} onPress={handleNavigation}> SIGN IN </Text>
      </Pressable>

      </View>
      </SafeAreaView>
  );
}





const styles = StyleSheet.create({
  button:{
    height:30,
    backgroundColor:'black',
    justifyContent:'center',
    alignItems:'center'
  },
  buttonText:{
    color:'white'
  }
})


export default LogIn;
