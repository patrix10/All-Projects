const express = require('express')
require('./config')
const Todos = require('./todos')
const cors = require('cors')

const app  = express()
app.use(cors())
app.use(express.json())

app.post('/add',async(req,res)=>{
    let data = new Todos(req.body)
    let result = await data.save()
    console.log(result)
    res.send(result)
})

app.get('/get',async(req,res)=> {
    const docs = await Todos.find({})
    res.send(docs)
})

app.put("/update/:_id",async(req,res)=> {
    console.log(req.params)
    let data = await Todos.updateOne(
        req.params,
        {
            $set:req.body
        }
    )
    res.send(data)
})

app.delete("/delete/:_id",async(req,res)=> {
    console.log(req.params)
    let data = await Todos.deleteOne(req.params)
    res.send(data)
})

app.listen(3001,()=> {
    console.log("Server is running")
})