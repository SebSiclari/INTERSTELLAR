import { StyleSheet, Text, Pressable, Image, View, Button } from 'react-native'
import{useState} from 'react'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'


const FavButton = ({marketCoin, setWatchList, watchList, name, image, symbol, marketCapRank,current_price, market_cap, price_change_percentage_24h}) => {

  const [isFav, setIsFav] = useState(watchList.some(coin => marketCoin.name === coin.name));


  const addCoinToWatchList= async (coin) =>{

    const response = await fetch('http://localhost:3005/coins',{
      method:'POST',
      headers:{
        Accept:'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        image:image,
        market_cap_rank:marketCapRank,
        symbol:symbol,
        current_price: current_price,
        price_change_percentage:price_change_percentage_24h,
        market_cap:market_cap
      })
    })

    const data = await response.json();

    return data

  }

  async function deleteCoin(id) {
    await fetch('http://localhost:3005/coins',{
      method:'DELETE'
    })
  }




  /*
   update state (watchlist); => rendering of components
   update database => in sync with data
  */
  const handleRemove=()=>{
    setIsFav(false)
    deleteCoin()
    setWatchList(prev=> prev=prev.filter(name=>name !== marketCoin.name));
  }
  const handleAdd= async (e) => {


      e.preventDefault();
      const newCoin ={
        name: name,
        image: image,
        symbol: symbol,
        marketCapRank: marketCapRank,
        currentPrice: current_price,
        priceChangePercentage:price_change_percentage_24h,
        market_cap:market_cap
      }

      setIsFav(true)

      const newFavoriteCoin= await addCoinToWatchList(marketCoin);
      setWatchList(prev=>[...prev, marketCoin.name])
    }



    return (
    <Pressable style={styles.button} onPress={
      isFav ? handleRemove : handleAdd }>
       {isFav ? <Image style={styles.stars} resizeMode='cover' source={require('../Assets/fullOnStar.png')}/> : <Image style={styles.stars} source={require('../Assets/emptyStar.png')}/>}
       </Pressable>
    )

}

export default FavButton;

const styles = StyleSheet.create({
  buttonContainer:{
    backgroundColor:'green',
    height:25,
    width:50,
    borderRadius:10,
    marginLeft:-20,
    marginTop:10,
    fontSize:1
  },
  button:{
    height:30,
    width:30,
    fontSize:5
  },
  image:{
    color:'#121212',
    width:30,
    height:30,
  },
  stars:{
    width:20,
    height:20,
    marginTop: 7.5,

  },


})