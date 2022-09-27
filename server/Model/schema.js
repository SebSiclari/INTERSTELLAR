const mongoose= require('mongoose');
const Schema= mongoose.Schema;

const coinSchema= new Schema({
  name:String,
  image:String,
  market_cap_rank: Number,
  symbol:String,
  current_price:Number,
  price_change_percentage_24h:Number,
  market_cap: Number,
})

const Coin = mongoose.model('Coins', coinSchema);

module.exports = Coin;
