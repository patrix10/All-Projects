import mongoose from "mongoose"

const Connection = ()=> {
    const db_url = "mongodb url with username and password"
    try {
        mongoose.connect(db_url,{useNewurlparser:true})
        console.log("database connect successfully")
    } catch (error) {
        console.log("error while connecting database")
    }
}
export default Connection