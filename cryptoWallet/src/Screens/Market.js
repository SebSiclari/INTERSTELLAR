import React from 'react'
import MyTabs from '../Navigation/Tabs';
import { StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList } from 'react-native'
import {connect} from 'react-redux'
import {getCoinMarket} from '../stores/market/marketActions'
import { Provider } from 'react-redux';

const Market = ({getCoinMarket}) => {


    React.useEffect(()=>{
      getCoinMarket()
    }, []);

  return (
    <Provider>
    <View style={styles.container}>
      <Text style={styles.text}>Market</Text>
    </View>
    </Provider>
  )
}


// function mapStateToProps(state){
//   return{
//     coins: state.marketReducer.coins
//   }
// }

// function mapDispatchToProps(dispatch){
//   return{
//     // @ts-ignore
//     getCoinMarket:(currency, coinList, orderBy, sparkline, priceChange)
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Market);

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#121212',
    justifyContent:'center',
    alignItems:'center'
  },
  text:{
    color:'white'
  }
})
