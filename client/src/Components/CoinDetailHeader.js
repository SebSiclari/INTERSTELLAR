import { StyleSheet, Text, View,Image, Button } from 'react-native'
import React, {useState, useEffect} from 'react'
import Ionicons from 'react-native-vector-icons'
import FavButton from './FavButton'

export default function CoinDetailHeader({setWatchList, marketCoin,watchList,coinId, image, symbol, marketCapRank, price_change_percentage_24h, current_price, market_cap, name}) {


  return (
    <View style={styles.headerContainer}>
      <View style={styles.tickerContainer}>
        <Image source={{ uri: image }} style={{ width: 25, height: 25 }} />

        <View style={styles.rankContainer}>
          <Text style={styles.rankText}>#{marketCapRank}</Text>
        </View>
      </View>
    <View style={styles.button}>
      <FavButton
          watchList={watchList}
          setWatchList={setWatchList}
          coinId={coinId}
          marketCoin={marketCoin}
          name={name}
          image={image}
          marketCapRank={marketCapRank}
          symbol={symbol}
          current_price={current_price}
          price_change_percentage_24h={price_change_percentage_24h}
          market_cap={market_cap} />
      </View>
      </View>

  )
}

const styles = StyleSheet.create({
  button: {
    position:'absolute',
    right: 14,

  },
  headerContainer:{
    flexDirection:'row',
    paddingHorizontal: 10,
    alignItems:'center',
    justifyContent:'center',

  },
  tickerContainer:{
    flexDirection:'row',
    alignItems:'center',
    marginTop:5

  },
  rankContainer:{
    backgroundColor:'#585858',
    padding:2,
    borderRadius:5,
    width:40,
    alignText:'center',
    alignItems:'center',
    justifyContent:'center',
    marginLeft:5,
  },
  rankText:{
    color:'white',
    fontWeight:'bold',
  },

})
