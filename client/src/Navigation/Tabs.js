import React from "react";
import Market from '../Screens/Market';
import WatchList from '../Screens/WatchList';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, Text, View} from 'react-native'
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (<>
    <Tab.Navigator  screenOptions={{headerShown:false}} >
      <Tab.Screen name="Market" component={Market}   />
      <Tab.Screen name="WatchList" component={WatchList} />
    </Tab.Navigator>
    </>
  );
}

const styles = StyleSheet.create({
  container:{
    hieght: 30,
    flex: 1,
    backgroundColor: '#121212',
  }
})

export default MyTabs;
