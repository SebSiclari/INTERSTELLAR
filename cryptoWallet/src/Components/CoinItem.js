import { StyleSheet, Text, View, Image, Pressable} from 'react-native'
import React from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native';



const CoinItem = ({marketCoin}) => {

  const {name, image, market_cap_rank, symbol, current_price,
  price_change_percentage_24h, market_cap } = marketCoin;

  const marketCap = (marketCap) =>{

    if(marketCap > 1_000_000_000_000) return `${Math.floor(marketCap / 1_000_000_000_000)}T`
    if(marketCap > 1_000_000_000) return `${Math.floor(marketCap / 1_000_000_000)}B`
    if(marketCap > 1_000_000) return `${Math.floor(marketCap / 1_000_000)}M`
    if(marketCap > 1_000) return `${Math.floor(marketCap / 1_000)}K`
  }


  const navigation= useNavigation();

  const handleNavigation=()=>{
    return navigation.navigate('CoinDetail')
  }

  return (
    <View style={styles.coinContainer} onPress={handleNavigation}>
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
    <View style={styles.rankContainer}>
    <Text style={styles.rank}>{market_cap_rank}</Text>
    </View>
    <Text style={styles.text}>{symbol}</Text>
    <Text style={styles.text}>{price_change_percentage_24h}</Text>
    </View>
    <View style={{marginLeft:'auto'}}>
    <Text style={styles.text}>{current_price}</Text>
    <Text style={styles.text}>MCap {marketCap(market_cap)}</Text>
    </View>
    </View>
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
    marginRight:5
  },
  rank:{
    fontWeight:'bold',
    color:'white',
    marginRight: 5,
  },
  rankContainer:{
    backgroundColor:'#585858',
    padding:2,
    borderRadius:5,
  }
})