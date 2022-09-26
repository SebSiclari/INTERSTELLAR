import axios from 'axios'

// for the coind details on the details page
export const getDetailedCoinData = async(coinId) => {
  try{

    const response= await axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}?tickers=true&market_data=true&community_data=false&developer_data=false&sparkline=true`)
    console.log('COIN DATA', response.data)
    return response.data

  }
  catch(e){
    console.log('ERROR COINT DETAL: ',e);
  }
}

// this is for the details on the chart on the details page

export const getChartData = async (coinId, selectedRange) => {

  try{
    const response= await axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=${selectedRange}&interval=hourly%20`)
    return response.data;
  }
  catch(e){
    console.log(e);
  }
};

// API FOR MARKET SCREEN
export const getMarketData= async (pageNumber = 1) => {

  try{
    const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${pageNumber}&sparkline=false&price_change_percentage=7d`)
    return response.data
  }
  catch(e){
    console.log(e);
  }
}