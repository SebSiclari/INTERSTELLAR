const express= require('express')
const cors= require('cors');
const app= express();
const PORT= process.env.PORT || 3005
const mongoose= require('mongoose')
const router=require('./router')

mongoose.connect('mongodb+srv://siclari98:blockchain@cluster0.ggbkn4d.mongodb.net/?retryWrites=true&w=majority')






app.use(cors());
app.use(express.json());
app.use(router)

app.listen(PORT, ()=>{
  console.log(`Server listening at http://localhost:${PORT}`)
})


