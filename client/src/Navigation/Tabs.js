import React, {useState, useEffect} from "react";
import Market from '../Screens/Market';
import WatchList from '../Screens/WatchList';
import Profile from "../Screens/Profile";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, Text, View} from 'react-native'
import CoinList from "../Screens/CoinList";
import { getMarketData } from "../Stores/requests";
const Tab = createBottomTabNavigator();

function MyTabs() {
  const [market, setMarket] = useState()
  const [watchList, setWatchList] = useState([])
  async function getListData (){
    // set list states with api calls
    const marketList= await getMarketData(1);
    const watchData = await fetch('http://localhost:3005/coins').then((data)=>data.json()
    )
    setMarket(marketList)
    setWatchList(watchData)

  }
  // return (<>
  //   <Tab.Navigator  screenOptions={{headerShown:false}} >
  //     <Tab.Screen name="Market" component={Market}   />
  //     <Tab.Screen name="WatchList" component={WatchList} />
  //   </Tab.Navigator>
  //   </>
  // );
  const childProps ={
    setWatchList,
    watchList,
    market
  }
  useEffect(()=>{
    getListData()
  }, [])
  return (
    <>
    <Tab.Navigator  screenOptions={{headerShown:false}} >
    <Tab.Screen name="Market"  >
      {(props)=> <CoinList  setMarket={setMarket} setWatchList={setWatchList} list={'market'} {...childProps} />}
    </Tab.Screen>
    <Tab.Screen name="WatchList" >
      {(props)=> <CoinList  setMarket={setMarket} setWatchList={setWatchList} list={'watchList'} {...childProps}/>}
    </Tab.Screen>
    <Tab.Screen name='Profile' component={Profile} />
    </Tab.Navigator>

    </>
  )
}

const styles = StyleSheet.create({
  container:{
    hieght: 30,
    flex: 1,
    backgroundColor: '#121212',
  }
})

export default MyTabs;
