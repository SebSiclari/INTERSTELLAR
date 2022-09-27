import { StyleSheet, Text, View, Image, Pressable} from 'react-native'
import React from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import WatchList from '../Screens/WatchList';



const CoinItem = ({marketCoin, watchList, setWatchList}) => {

  const {name, image, market_cap_rank, symbol, current_price,
  price_change_percentage_24h, market_cap, id } = marketCoin;



  const marketCap = (marketCap) =>{

    if(marketCap > 1_000_000_000_000) return `${Math.floor(marketCap / 1_000_000_000_000)}T`
    if(marketCap > 1_000_000_000) return `${Math.floor(marketCap / 1_000_000_000)}B`
    if(marketCap > 1_000_000) return `${Math.floor(marketCap / 1_000_000)}M`
    if(marketCap > 1_000) return `${Math.floor(marketCap / 1_000)}K`
  }


  const navigation= useNavigation();

  const handleNavigation=()=>{
     navigation.navigate('CoinDetails', {marketCoin,
    watchList, setWatchList})
  }

  return (
    <Pressable onPress={handleNavigation}>

    <View style={styles.coinContainer}>
    <Image
      source={{
        uri:image,
      }}
      style={{
        height:30,
        width:30,
        marginRight:10,
        alignSelf:'center'
      }}
    />
    <View>
    <Text style={styles.title}>{name}</Text>
    <View style={{flexDirection:'row'}}>
    <View style={ styles.rankContainer}>
    <Text style={market_cap_rank <= 99 ? styles.rank : styles.rankOver}>{market_cap_rank}</Text>
    </View>
    <Text style={styles.text}>{symbol}</Text>
    <Text style={ price_change_percentage_24h > 0 ? styles.textGreen : styles.textRed}>{price_change_percentage_24h ? price_change_percentage_24h.toFixed(2) : null}%</Text>
    </View>
    </View>
    <View style={{marginLeft:'auto'}}>
    <Text style={styles.currentPriceText}>{current_price}</Text>
    <Text style={styles.text}>MCap {marketCap(market_cap)}</Text>
    </View>
    </View>
    </Pressable>

  )
}

export default CoinItem

const styles = StyleSheet.create({
  coinContainer:{
    flexDirection:'row',
    borderBottomWidth:0.3,
    borderBottomColor:'#282828',
    padding:15,
  },
  title:{
    color:'white',
    fontSize:16,
    fontWeight:'bold',
  },
  text:{
    color:'white',
    marginLeft:5,
    marginRight:5,
    justifyContent:'center'
  },
  currentPriceText:{
    fontWeight:'bold',
    color:'white',
    marginLeft:5,
    marginRight:5,
    juststifyContent:'center',
    textAlign:'right'


  },
  textGreen:{
    color:'green'
  },
  textRed:{
    color:'red'
  },
  rank:{
    fontSize:12,
    fontWeight:'bold',
    color:'white',
    marginRight: 5,
    justifyContent:'center',
    alignItems:'center'
  },
  rankOver:
  {
    size:100,
    fontWeight:'bold',
    color:'white',
    marginRight: 5,
    justifyContent:'center',
    alignItems:'center'
  },
  rankContainer:{
    backgroundColor:'#585858',
    padding:2,
    borderRadius:5,
    width:30,
    alignItems:'center',
    justifyContent:'center'
  },

})