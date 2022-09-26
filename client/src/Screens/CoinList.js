import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import CoinItem from '../Components/CoinItem'

const CoinList = ({list, setWatchList, watchList, market}) => {
  /*
list is a string that tells us if this list should render market or watchlist
  */

  const watchData = []
  watchList.forEach(name => market.forEach(coin => {
    if(name === coin.name) watchData.push(coin)
  }))
  console.warn(watchData)
  return (
    <View style={styles.container}>
    <FlatList
    data={list==='market' ? market : watchData}
    keyExtractor={(item)=> item._id}
    renderItem={({item})=> <CoinItem marketCoin={item} watchList={watchList} setWatchList={setWatchList} />}
    />
    </View>
  )
}

export default CoinList

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#121212',
    flex: 1
  }
})