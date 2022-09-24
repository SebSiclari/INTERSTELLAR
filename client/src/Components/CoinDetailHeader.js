import { StyleSheet, Text, View,Image, Button } from 'react-native'
import React, {useState, useEffect} from 'react'
import Ionicons from 'react-native-vector-icons'
import {db} from '../../firebase/firebase-config'
import { async } from '@firebase/util'




export default function CoinDetailHeader({name, image, symbol, marketCapRank}) {

  const [watchlist, setWatchList]= useState([])

  const getCoinsApi = async () =>{

    const response = await fetch('http://localhost:3005/coins')
    const data= await response.json();
    setWatchList(data);
    return data
  }


  const postCoin= async () =>{

    const response = await fetch('http://localhost:3005/coins',{
      method:'POST',
      headers:{
        Accept:'application/json',
        'Content-Type': 'application/json'

      },
      body: JSON.stringify({
        name: name,
        image:image,
        symbol:symbol,
        marketCapRank:marketCapRank
      })
    })

    const data = await response.json();

    return data

  }


  async function addCoin(e) {
    e.preventDefault();

    const newCoin ={
      name:e.target.name.value,
      image:e.target.image.value,
      symbol:e.target.symbol.value,
      marketCapRank: e.target.marketCapRank.value,
    }

    const newFavoriteCoin= await postCoin(newCoin);
    setWatchList(prev=>[...prev, newFavoriteCoin ])
  }

  useEffect( () =>{

   getCoinsApi();

  },[])






  return (
    <View style={styles.headerContainer}>
    <View style={styles.tickerContainer}>
    <Image source={{uri:image}} style={{width:25, height:25}} />
    <Text style={{color:'white'}}>{symbol.toUpperCase()}</Text>
    <Text style={{color:'white'}}>#{marketCapRank}</Text>
    </View>
    <Button
    onPress={()=>{console.warn('working')}}
    title='Add'
    color='white'/>
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer:{
    flexDirection:'row',
    paddingHorizontal: 10,
    alignItems:'center',
    justifyContent:'space-between',

  },
  tickerContainer:{
    flexDirection:'row',
    alignItems:'center'
  }
})
