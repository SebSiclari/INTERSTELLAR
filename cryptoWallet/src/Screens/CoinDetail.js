import React from 'react'
import {useEffect, useState} from 'react'
import {View, Text, ActivityIndicator} from 'react-native'
// import {AntDesign} from 'react-native-vector-icons'
import { useRoute } from '@react-navigation/native';
import { getDetailedCoinData, getMarketData } from '../Stores/requests';
import Animated from 'react-native-reanimated'


const CoinDetails = ({Coin}) => {

  const {image} = Coin

  const [coin, setCoin] = useState(null);
  const [coinMarketData, setCoinMarketData]= useState(null);
  const route= useRoute()
  const {params: {coinId}} = route

  const [loading, setLoading]= useState(false);
  const [coinValue, setCoinValue]= useState('1');
  const [usdValue, setUsdValue] = useState('');



  if(loading || !coin) return <ActivityIndicator size='large'/>


  const fetchCoinData= async()=>{
    setLoading(true)
    const fetchedCoinData = await getDetailedCoinData(coindId);
    const fetchMarketData= await getMarketData(coinId);
    setCoin(fetchedCoinData)
    setCoinMarketData(fetchMarketData);
    setLoading(false)
  }

  useEffect(()=>{

    fetchCoinData()
  },[]);


  const {
    image: {small},
    name,
    market_data:{
      market_cap_rank,
      current_price,
      price_change_percentage_24h
    }
  } = coin;

  const {prices} = coinMarketData;



  return (
    <View>
    {/* <Image source={{uri:image}} style={{width:25, height:25}} /> */}

  <Text>Individual Graph</Text>
    </View>
  );
}

export default CoinDetails;