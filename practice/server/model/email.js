import mongoose from 'mongoose'
import { stringify } from 'querystring'

const emailSchema = new mongoose.Schema({
    to:{
        type:String,
        required:true
    },
    from:{
        type: stringify,
        required:true
    }
})

const email = mongoose.model('emails',emailSchema)
export default email;