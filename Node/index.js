const express = require('express')
require('./config')
const Product = require('./product')
const cors = require('cors')
app.use(cors())

const app = express()

app.use(express.json())

app.post('/',async(req,res)=>{
    let data = new Product(req.body)
    let result = await data.save()
    res.send(result)
})

app.listen(4000,"localhost",()=>{
    console.log("server: http://localhost:4000")
})
