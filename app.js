require('dotenv').config();

const express = require('express');
const path = require('path');
//const connectDB = require('./dbConn');
const app = express();

//Added
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URI, { useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', (err) => console.log(err));
db.once('open', () => console.log('Connected to Database'));

//connectDB();

app.use(express.json());

const crude = require('./routes/crude');
app.use('/', crude);

// app.get('/',(req,res)=>{
//     res.sendFile('./views/index.html', {root: __dirname});
// })

app.listen(80, () => console.log('Server Started...'));