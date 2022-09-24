import React from 'react'
import {useEffect, useState} from 'react'
import {View, Text,Image, ActivityIndicator, Dimensions, TextInput,StyleSheet} from 'react-native'
// import {AntDesign} from 'react-native-vector-icons'
import { useRoute } from '@react-navigation/native';
import { getDetailedCoinData, getMarketData, getChartData } from '../Stores/requests';
import Animated from 'react-native-reanimated';
import {ChartDot, ChartPath, ChartPathProvider} from '@rainbow-me/animated-charts';
import CoinDetailHeader from '../Components/CoinDetailHeader';
import { LineChart } from 'react-native-wagmi-charts';


const CoinDetails = ({ route,  navigation}) => {

  const [coin, setCoin] = useState(null);
  const [coinMarketData, setCoinMarketData]= useState(null);

  const {coinId} = route.params

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
    symbol,
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

  const changeCoinValue = (value)=>{
    setCoinValue(value)
    const intValue= parseFloat(value) || 0
    setUsdValue((intValue*current_price.usd).toString())
  }

  const changeUsdValue= (value)=>{
    setUsdValue(value);
    const intValue= parseFloat(value) || 0
    setCoinValue((intValue/current_price.usd).toString())
}


  // How we update the value as we move along the graph

  const percentageColor= price_change_percentage_24h < 0 ? '#ea3943' : '#16c784'
  const chartColor = current_price.usd > prices[0][1] ? '#16c784' : '#ea3943'

  const formatCurrency = (value)=>{
    'worklet';
    if(!value) return `$${current_price.toFixed(2).toString()}`

    return `$${parseFloat(value).toFixed(2)}`

  }


  return (
    <View style={styles.container}>
    <CoinDetailHeader
    image={small}
    symbol={symbol}
    marketCapRank={market_cap_rank}
    />

    <View style={{padding:15}}>
    <View>
      <Text style={{color:'white'}}>{name} </Text>
      <Text style={styles.priceText}>{current_price.usd} </Text>
    </View>
    <View style={{backgroundColor:'red', paddingHorizontal:3,
    paddingVertical:8, borderRadius:5, flexDirection:'row',}}>
    <Text style={{color:'white'}}> {price_change_percentage_24h.toFixed(2)}%</Text>
    </View>
    </View>
    <LineChart.Provider data={prices.map(([x,y])=>({timestamp:x, value: y}))} >
      <LineChart >
        <LineChart.Path color={chartColor} />
        <LineChart.CursorCrosshair color={chartColor} >
          <LineChart.Tooltip textStyle={{ color:'white'}} />
        </LineChart.CursorCrosshair>
      </LineChart>
    </LineChart.Provider>


    <View style={{flexDirection:'row', flex:1}}>
    <View style={{flexDirection:'row', flex:1}}>
      <Text style={{color:'white', alignSelf:'center'}}>{symbol.toUpperCase()}</Text>
      <TextInput
      style={styles.input}
      value={coinValue.toString()}
      onChangeText={changeCoinValue} />
    </View>
    <View>
    <Text>{symbol.toUpperCase()}</Text>
      <TextInput style={styles.input}
      value={usdValue.toString()}
      keyboardType='numeric'
      onChangeText={changeUsdValue}
      />

    </View>
    </View>
    </View>
  );
}

const styles= StyleSheet.create({
  container:{
    backgroundColor:'#121212',
    flex:1,
  },
  headerContainer:{
    flexDirection:'row',
    paddingHorizontal: 10,
    alignItems:'center',
    justifyContent:'space-between',

  },
  tickerContainer:{
    flexDirection:'row',
    alignItems:'center'
  },

  priceText:{
    fontSize:30,
    fontWeight: '600',
    color:'white',

  },
  input:{
    width:130,
    height:40,
    margin:12,
    borderBottomWidth: 1,
    borderBottomColor:'white',
    padding:10,
    fontSize:16,
    color:'white'
  }

})

export default CoinDetails;