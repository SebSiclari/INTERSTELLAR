const model = require('../model/schema')

exports.getCoins = async(req, res)=>{

  try{
    const coin = await model.find();
    res.send(coin);
    res.status(200);


  }

  catch(e){
    console.log(e)
  }


}

exports.postCoins = async(req, res)=>{

  try{
    const coin= await model.create(req.body);
    res.send(coin);
    res.status(201)
  }

  catch(e){
    console.log(e)
    res.status(400)
  }


}

exports.deleteCoin= async (req, res) =>{

  try{
    await model.findByIdAndDelete(req.params.id);
    res.send('Deleted')
    res.status(201)

  }
  catch(e){
    console.log(e);
    res.status(500)

  }
}