const express = require('express')
require('./config')
const Register = require('./register')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

app.post("/register",async(req,res)=> {
    let data = new Register(req.body)
    let result = await data.save()
    console.log(result)
    res.send(result)
})

app.post("/login",async(req,res)=> {
    let {email,password} = req.body
    Register.findOne({email: email})
    .then(user => {
        if(user){
            if(user.password === password) {
                res.json("Success")
            } else {
                res.json("password incorrect")
            }
        } else {
            res.json("No record existed")
        }
    })
})

app.listen(3001,() => {
    console.log("server is running")
})