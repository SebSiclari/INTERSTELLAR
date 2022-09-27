import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, {useState} from 'react'
import CoinItem from '../Components/CoinItem'
import DropDown from '../Components/DropDown'

const CoinList = ({list, setMarket, setWatchList, watchList, market}) => {

 console.warn(market)
  const [sortState, setSortState] = useState('Rank')
  const categories=[
    {label: 'Price', value:'Price'},
    {label: 'MarketCap', value: 'MarketCap' },
    {label: 'Rank', value: 'Rank'},
    {label: 'PriceChange', value:'PriceChange'}
  ]
  const [order, setOrder] = useState('ASC')
  const direction = [
    {label: '⬆', value: 'ASC'},
    {label: '⬇', value: 'DESC'},
  ]
  /*
  state = sorting, setSorting => string
    rates
    %
  */
  const sortedListData = list === 'watchList' ? watchList : market

  switch(sortState){
    case 'Price':
      sortedListData?.sort((a,b)=> {
        return order === 'ASC'? a.current_price - b.current_price : b.current_price - a.current_price})
      break;
    case 'MarketCap':
      sortedListData?.sort((a,b)=>order === 'ASC'?a.market_cap - b.market_cap : b.market_cap - a.market_cap)
      break;
    case 'Rank':
      sortedListData?.sort((a,b)=>order === 'ASC'? a.market_cap_rank - b.market_cap_rank :b.market_cap_rank - a.market_cap_rank)
      break;
    case 'PriceChange':
      sortedListData?.sort((a,b)=>order === 'ASC'?a.price_change_percentage_24h - b.price_change_percentage_24h : b.price_change_percentage_24h - a.price_change_percentage_24h)

  }
  /*
listData.sort((a, b)=>{
  switch case checking sorting state
    sort by different properties
})

dropdownMenu => setSortingState(e.target.value)
  */



  const watchData = []
  watchList.forEach(name => market.forEach(coin => {
    if(name === coin.name) watchData.push(coin)
  }))


  return (
    <>
    <DropDown
    setter={setSortState}
    data={categories}
    />
     <DropDown
    setter={setOrder}
    data={direction}
    />
    <View style={styles.container}>

      <FlatList
        data={sortedListData}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => <CoinItem marketCoin={item} watchList={watchList} setWatchList={setWatchList} />} />
    </View></>
  )
}

export default CoinList

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#121212',
    flex: 1
  }
})