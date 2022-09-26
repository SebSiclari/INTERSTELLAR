import { StyleSheet, Text, Pressable, View,Button } from 'react-native'
import{useState} from 'react'
import React from 'react'


const FavButton = ({marketCoin, setWatchList, watchList, name, image, symbol, marketCapRank,current_price, market_cap, price_change_percentage}) => {


  const [isFav, setIsFav] = useState(watchList.some(coin => marketCoin.name === coin.name))
  // let isFav = watchList?.map(e=> {
  //   console.log('XANKS',e.name)
  //   return e.name}).indexOf(name) === -1 ? false : true



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
        marketCapRank:marketCapRank,
        symbol:symbol,
        currentPrice: current_price,
        priceChangePercentage:price_change_percentage,
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
        priceChangePercentage:price_change_percentage,
        market_cap:market_cap
      }

      setIsFav(true)

      const newFavoriteCoin= await addCoinToWatchList(marketCoin);
      setWatchList(prev=>[...prev, marketCoin.name])
    }



    return (
    <Pressable style={styles.button} onPress={isFav ? handleRemove : handleAdd }>{isFav ? <Text>X</Text> : <Text>Add</Text> }</Pressable>
    )

}

export default FavButton;

const styles = StyleSheet.create({
  button:{
    height:25,
    width:25,
    backgroundColor:'white'
  },
})