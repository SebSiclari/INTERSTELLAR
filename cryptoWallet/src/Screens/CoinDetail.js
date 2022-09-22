import React from 'react'
import {useEffect, useState} from 'react'
import {View, Text, ActivityIndicator, Dimensions, TextInput} from 'react-native'
// import {AntDesign} from 'react-native-vector-icons'
import { useRoute } from '@react-navigation/native';
import { getDetailedCoinData, getMarketData, getChartData } from '../Stores/requests';
import Animated from 'react-native-reanimated';
import {ChartDot, ChartPath, ChartPathProvider} from '@rainbow-me/animated-charts';


const CoinDetails = () => {

  const [coin, setCoin] = useState(null);
  const [coinMarketData, setCoinMarketData]= useState(null);

  const route= useRoute()
  const {params: {coinId}} = route

  const [loading, setLoading]= useState(false);
  const [coinValue, setCoinValue]= useState('1');
  const [usdValue, setUsdValue] = useState('2');


  const fetchCoinData= async()=>{
    setLoading(true)
    const fetchedCoinData = await getDetailedCoinData(coinId);
    const fetchMarketData= await getChartData(coinId);
    setCoin(fetchedCoinData)
    setCoinMarketData(fetchMarketData);
    setUsdValue(fetchedCoinData.market_data.current_price.usd.toString())
    setLoading(false)
  }

  useEffect(()=>{

    fetchCoinData()
  },[]);


if(loading || !coin) {return <ActivityIndicator size='large'/>}


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

  // const [coinValue, setCoinValue]= useState('1');
  // const [usdValue, setUsdValue] = useState('');

  const screenWidth=Dimensions.get('window').width

  // How we update the value as we move along the graph

  const percentageColor= price_change_percentage_24h < 0 ? '#ea3943' : '#16c784'
  const chartColor = current_price.usd > prices[0][1] ? '#16c784' : '#ea3943'

  const formatCurrency = (value)=>{
    'worklet';
    if(!value) return `$${current_price.toFixed(2).toString()}`

    return `$${parseFloat(value).toFixed(2)}`

  }



  return (
    <View>
    {/* <Image source={{uri:image}} style={{width:25, height:25}} /> */}

  <Text>Individual Graph</Text>
    <ChartPathProvider data={{ points: prices.map(([x,y])=>({x, y})), smoothingStrategy: 'complex' }}>
    <View>
      <ChartPath strokeWidth={2} height={screenWidth / 2} stroke={chartColor} width={screenWidth} />
      <ChartDot style={{ backgroundColor: chartColor }} />
      </View>
    </ChartPathProvider>
    <View style={{flexDirection:'row'}}>
    <View>
      <TextInput/>
    </View>
    <View>
      <TextInput/>

    </View>
    </View>
    </View>
  );
}

export default CoinDetails;