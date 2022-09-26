// import { useContext, createContext, useState } from 'react';
// import React from 'react'
// import AsyncStorage from '@react-native-async-storage/async-storage';

// export const WatchListContext = createContext();

// export const useWatchlist = () => useContext(WatchListContext);


// const WatchListProvider = ({children}) => {

//   const [watchlistCoinIds, setWatchListCoinIds] = useState([]);

//   const storeWatchlistCoinId= async (coinId)=>{

//     try{
//       const newWatchList = [...watchlistCoinIds, coinId];
//       const jsonValue = JSON.stringify(newWatchList);
//       await AsyncStorage.setItem('@watchlist_coins', jsonValue);
//       setWatchListCoinIds(newWatchList);
//     }
//     catch(e){
//       console.log(e);
//     }

//   }

//   const removeWatchlistCoinId= async (coinId)=>{
//     try{
//       const newWatchList = watchlistCoinIds.filter((coinIdValue)=> coinIdValue !== coinId);
//       const jsonValue = JSON.stringify(newWatchList);
//       await AsyncStorage.setItem('@watchlist_coins', jsonValue);
//       setWatchListCoinIds(newWatchList);
//     }
//     catch(e){
//       console.log(e);
//     }

//   }


//   return (
//     <WatchListContext.Provider value={{watchlistCoinIds, storeWatchlistCoinId, removeWatchlistCoinId}}>
//       {children}
//     </WatchListContext.Provider>
//   )
// }

// export default WatchListContext

// const styles = StyleSheet.create({})