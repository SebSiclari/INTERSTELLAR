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
    navigation.navigate('Dashboard')
  }

  return (
    <SafeAreaView style={{backgroundColor:'#121212',flex:1}}>
    <View style={styles.Login}>
    <View style={styles.inputContainers}>
    <TextInput
    style={{color:'white'}}
    placeholder="Email"
    placeholderTextColor={'white'}
    value={email}
    onChangeText={text => setEmail(text)}
        />

        <TextInput
          style={{color:'white'}}
          placeholder="Password"
          value={password}
          placeholderTextColor={'white'}
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
        />
        </View>

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
  },
  Login:{
    marginTop:300,
    color:'white'
  },
  inputContainers:{
    color:'white'
  }
})


export default LogIn;
