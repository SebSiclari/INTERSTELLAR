import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import LogIn from './Screens/LogIn';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Market from './Screens/Market';
import MyTabs from './Navigation/Tabs';


const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name='Login' component={LogIn}/>
    <Stack.Screen name="Market" component={Market}/>
    <Stack.Screen name="MyTabs" component={MyTabs}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles= StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#1212',
  }
})

export default App;
