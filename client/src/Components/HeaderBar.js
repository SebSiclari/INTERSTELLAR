import { View, Text, StyleSheet } from 'react-native'
import React from 'react'


const MarketBar = () => {
  return (

      <Text style={styles.text}>Market</Text>

  )
}

export default MarketBar


const styles = StyleSheet.create({
 text:{
    color: 'white',
    fontSize: 40,
    fontWeight:'bold',
    fontFamily:'Verdana',
    backgroundColor:'#121212',
    textAlign:'center',
    marginTop:10
  }
})