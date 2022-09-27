import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import LogIn from './Screens/LogIn';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Market from './Screens/Market';
import MyTabs from './Navigation/Tabs';
import Dashboard from './Components/Dashboard'
import CoinDetails from './Screens/CoinDetail';
// import { Provider } from 'react-redux';
// import {createStore} from 'redux';
// import { marketReducer } from './Stores/Market/marketReducer';

// const store = createStore(marketReducer)


const Stack = createNativeStackNavigator();

const App = () => {

  return (

    <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerStyle :{
      backgroundColor: '#121212',
      color:'white'
    }}}>
    {/* <Stack.Screen name='Login' component={LogIn}/> */}
    <Stack.Screen name="Dashboard" component={Dashboard}/>
    <Stack.Screen name='CoinDetails' component={CoinDetails}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles= StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#121212',
  }
})

export default App;
