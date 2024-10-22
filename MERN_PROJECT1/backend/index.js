const express = require('express')
require('./config')
const Product = require('./pro')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

app.post('/',async(req,res)=>{
    let data = new Product(req.body)
    let result = await data.save()
    res.send(result)
})

app.get('/',async(req,res)=> {
    let data = await Product.find()
    res.send(data)
})

app.listen(4000,"localhost",()=>{
    console.log("server: http://localhost:4000")
})
