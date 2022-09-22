import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import LogIn from './Screens/LogIn';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Market from './Screens/Market';
import MyTabs from './Navigation/Tabs';
import CoinDetails from './Screens/CoinDetail';
// import { Provider } from 'react-redux';
// import {createStore} from 'redux';
// import { marketReducer } from './Stores/Market/marketReducer';

// const store = createStore(marketReducer)


const Stack = createNativeStackNavigator();

const App = () => {

  return (

    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name='Login' component={LogIn}/>
    <Stack.Screen name="Market" component={Market}/>
    <Stack.Screen name="MyTabs" component={MyTabs}/>
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
