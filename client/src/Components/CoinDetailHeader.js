import { StyleSheet, Text, View,Image, Button } from 'react-native'
import React, {useState, useEffect} from 'react'
import Ionicons from 'react-native-vector-icons'
import FavButton from '../Components/FavButton'

export default function CoinDetailHeader({setWatchList, marketCoin,watchList,coinId, name, image, symbol, marketCapRank, current_price, market_cap, price_change_percentage}) {




  // const addCoinToWatchList= async (coin) =>{

  //   const response = await fetch('http://localhost:3005/coins',{
  //     method:'POST',
  //     headers:{
  //       Accept:'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       name: name,
  //       image:image,
  //       marketCapRank:marketCapRank,
  //       symbol:symbol,
  //       currentPrice: current_price,
  //       priceChangePercentage:price_change_percentage,
  //       market_cap:market_cap
  //     })
  //   })

  //   const data = await response.json();

  //   return data

  // }


  // async function addCoinHandler(e) {
  //   e.preventDefault();
  //   const newCoin ={
  //     name: name,
  //     image: image,
  //     symbol: symbol,
  //     marketCapRank: marketCapRank,
  //     currentPrice: current_price,
  //     priceChangePercentage:price_change_percentage,
  //     market_cap:market_cap
  //   }


  //   const newFavoriteCoin= await addCoinToWatchList(newCoin);
  //   // setWatchList(prev=>[...prev, newFavoriteCoin ])
  // }








  return (
    <View style={styles.headerContainer}>
      <View style={styles.tickerContainer}>
        <Image source={{ uri: image }} style={{ width: 25, height: 25 }} />
        <Text style={{ color: 'white' }}>{symbol.toUpperCase()}</Text>
        <View style={styles.rankContainer}>
          <Text style={styles.rankText}>#{marketCapRank}</Text>
        </View>
      </View>
    <View style={styles.button}><FavButton
          watchList={watchList}
          setWatchList={setWatchList}
          coinId={coinId}
          name={name}
          image={image}
          symbol={symbol}
          marketCapRank={marketCapRank}
          current_price={current_price}
          market_cap={market_cap}
          price_change_percentage={price_change_percentage}
          marketCoin={marketCoin} />
      </View>
      </View>

  )
}

const styles = StyleSheet.create({
  headerContainer:{
    flexDirection:'row',
    paddingHorizontal: 10,
    alignItems:'center',
    justifyContent:'center',

  },
  tickerContainer:{
    flexDirection:'row',
    alignItems:'center',

  },
  rankContainer:{
    backgroundColor:'#585858',
    padding:2,
    borderRadius:5,
    width:30,
    alignItems:'center',
    justifyContent:'center'
  },
  rankText:{
    color:'white',
    fontWeight:'bold',
  },

})
