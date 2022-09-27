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
import Filters from '../Components/Filters';


const CoinDetails = ({ route,  navigation}) => {
// price state to be updated



  const [coin, setCoin] = useState(null);
  const [coinMarketData, setCoinMarketData]= useState(null);
  // const [currPrice, setCurrPrice] = useState(coin.market_data.current_price)

  const {marketCoin, setWatchList, watchList} = route.params


  const [loading, setLoading]= useState(false);
  const [coinValue, setCoinValue]= useState('1');
  const [usdValue, setUsdValue] = useState('2');
  const [selectedRange, setSelectedRange]=useState('1');


  const fetchCoinData = async()=>{
    setLoading(true)
    const fetchedCoinData = await getDetailedCoinData(marketCoin.id);
    const fetchMarketData= await getChartData(marketCoin.id);
    console.log('FECHED DATA', fetchedCoinData)
    setCoin(fetchedCoinData);
    setCoinMarketData(fetchMarketData);
    setUsdValue(fetchedCoinData.market_data.current_price.usd.toString())
    setLoading(false)
  }

  const fetchMarketCoinData = async (selectedRangeValue) =>{
    const fetchedCoinMarketData = await getChartData(marketCoin.id, selectedRangeValue)
    setCoinMarketData(fetchedCoinMarketData);
    setLoading(false);
  }
  const onSelectedRangeChange=(selectedRangeValue)=>{
    setSelectedRange(selectedRangeValue)
    fetchMarketCoinData(selectedRangeValue)
  }
  useEffect(()=>{
    setTimeout(()=>{onSelectedRangeChange('1')}, 2000)

    fetchCoinData()
    fetchMarketCoinData(1)
  },[]);


if(loading || !coin) {return <ActivityIndicator size='large'/>}


  const {
    image: {small},
    id,
    name,
    symbol,
    market_data:{
      market_cap_rank,
      current_price,
      price_change_percentage_24h,
      market_cap
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
    current_price={current_price}
    marketCoin={marketCoin}
    setWatchList={setWatchList}
    image={small}
    watchList={watchList}
    symbol={symbol}
    marketCapRank={market_cap_rank}
    coinId={marketCoin.id}
    name={coin.name}
    price_change_percentage_24h={ price_change_percentage_24h}
    market_cap={1111}
     />

    <View style={{padding:15}}>
    <View>
      <Text style={{color:'white'}}>{name} </Text>
      <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
      <Text style={styles.priceText}>${current_price.usd} </Text>
      <View style={{backgroundColor:'red', paddingHorizontal:3,
    paddingVertical:8, borderRadius:5, flexDirection:'row', width:70}}>
    <Text style={{color:'white'}}> {price_change_percentage_24h.toFixed(2)}%</Text>
    </View>

      </View>

    </View>
    </View>
    <View style={styles.filtersContainer}>
      <Filters filterDay='1' filterText='24h' selectedRange={selectedRange} setSelectedRange={onSelectedRangeChange} />
      <Filters filterDay='7' filterText='7d'  selectedRange={selectedRange} setSelectedRange={onSelectedRangeChange} />
      <Filters filterDay='30' filterText='30d' selectedRange={selectedRange} setSelectedRange={onSelectedRangeChange} />
      <Filters filterDay='365' filterText='1y'  selectedRange={selectedRange} setSelectedRange={onSelectedRangeChange} />
      <Filters filterDay='max' filterText='All' selectedRange={selectedRange} setSelectedRange={onSelectedRangeChange} />
    </View>
    <LineChart.Provider data={prices.map(([x,y])=>({timestamp:x, value: y}))} >
      <LineChart >
        <LineChart.Path color={chartColor} />
        <LineChart.CursorCrosshair color={chartColor} >
          <LineChart.Tooltip textStyle={{ color:'white',
          backgroundColor:'#585858',
          borderRadius:4,
          fontSize:15,
          padding:4
          }} />
        </LineChart.CursorCrosshair>
      </LineChart>
    </LineChart.Provider>

    <View style={styles.footer}>
      <View style={styles.price_container}>
        <View style={{flexDirection:'row'}}>
          <View style={{justifyContent:'center'}}>
            <Text style={{color:'white', fontSize:20,  marginRight:15}}>{symbol.toUpperCase()}</Text>
          </View>
          <TextInput
          style={styles.input}
          value={coinValue.toString()}
          onChangeText={changeCoinValue}
          />
        </View>
        <View style={{flexDirection:'row'}}>
          <View style={{justifyContent:'center'}}>
            <Text style={{color:'white', fontSize: 20, marginRight:15}}>USD</Text>
          </View>
          <TextInput style={styles.input}
          value={usdValue.toString()}
          keyboardType='numeric'
          onChangeText={changeUsdValue}
          />
        </View>
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
  price_container: {
    flexDirection:'row',
    justifyContent:'space-evenly'
  },
  input:{
    width:100,
    height:40,
    borderBottomWidth: 1,
    borderBottomColor:'white',
    padding:10,
    fontSize:20,
    color:'white'
  },
  filtersContainer:{
    flexDirection:'row',
    justifyContent:'space-around',
    backgroundColor:'#2B2B2B',
    paddingVertical:5,
    borderRadius:5,
    marginHorizontal:10,
    marginVertical: 10
  },
  footer:{
    marginTop:40
   }
})

export default CoinDetails;