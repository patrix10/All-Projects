import mongoose from 'mongoose';

const Connection = async (username, password) => {
    try {   
        const URL = `mongodb+srv://${username}:${password}@cluster0.uxz2g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
        await mongoose.connect(URL, { useNewUrlParser: true })
        
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error);
    }
}

export default Connection;