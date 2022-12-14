import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import LogIn from './Screens/LogIn';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Market from './Screens/Market';
import MyTabs from './Navigation/Tabs';
import Dashboard from './Components/Dashboard'
import CoinDetails from './Screens/CoinDetail';



const Stack = createNativeStackNavigator();

const App = () => {

  const [watchList, setWatchList] = useState([])
  const [selected, setSelected]= useState(null);
  const compProp = {watchList, setWatchList, selected, setSelected}
  return (

    <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerStyle :{
      backgroundColor: '#121212',
      color:'white'
    }}}>
    <Stack.Screen name='Login' component={LogIn}/>
    <Stack.Screen name="Dashboard">
      {(props)=><Dashboard {...compProp}/>}
    </Stack.Screen>
    <Stack.Screen name='CoinDetails' >
    {(props)=><CoinDetails {...compProp}/>}
    </Stack.Screen>
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
