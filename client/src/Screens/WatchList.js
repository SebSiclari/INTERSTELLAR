import React, {useContext, createContext, useState, useEffect} from 'react'
import {View, Text, FlatList} from 'react-native'
import CoinItem from '../Components/CoinItem'


const WatchList = ({coinId, name, image, symbol, marketCapRank,current_price, market_cap, price_change_percentage}) => {

  const [watchlist, setWatchList]= useState([]);





  const getWatchList = async () =>{

    const response = await fetch('http://localhost:3005/coins')
    const data= await response.json();
     setWatchList(data);
    return data
  }

  useEffect( ()=>{
  getWatchList()
  },[]);




  return (
    <View style={{flex:1, backgroundColor:'#121212'}}>
  <FlatList
  data={watchlist}
  keyExtractor={item=> item.id}
  renderItem={({item})=>{ return <CoinItem key={item.id} watchlist={watchlist} marketCoin={item}/> }}
  />
    </View>
  );
}

export default WatchList