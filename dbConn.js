require('dotenv').config();

const mongoose = require('mongoose');
const db = null;

const connectDB = async() => {
    try{
        await mongoose.connect(process.env.DATABASE_URI, { useNewUrlParser: true});
        db = mongoose.connection;
        db.on('error');
        db.once('open', () => console.log('Connected to Database'));
        
        
    } catch (err){
        console.log(err);
        console.log('Cannot Connect');
    }
}

module.exports=connectDB;