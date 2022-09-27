import React from 'react'
import {Text, View, StyleSheet} from 'react-native';
import MyTabs from '../Navigation/Tabs';

const  DashBoard = () => {

  return(
    <View style={styles.container}>
      <MyTabs/>
    </View>

  )

}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#121212',
  }
})

export default DashBoard;

