const controllerFunctions= require('./Controller/index')
const router = require('express').Router();
router.get('/coins', controllerFunctions.getCoins)
router.post('/coins', controllerFunctions.postCoins)
router.delete('/coins', controllerFunctions.deleteCoin)

module.exports= router;