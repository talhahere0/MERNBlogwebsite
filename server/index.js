const express =require('express');
const mongoose = require('mongoose');
// const morgan = require('morgan');

const cors = require('cors');
const path = require('path');

const app = express();

app.use('/uploads',express.static('uploads'))
app.use(express.json())
mongoose.connect('mongodb+srv://shantu:talha123@cluster0.w4zcw.mongodb.net/food?retryWrites=true&w=majority')
const connctdb = mongoose.connection

connctdb.on("open",()=>{
    console.log("database is connectd")
})
app.use(cors())
app.use('/api',require('./routes/categoryroute'))
app.use((req,res)=>{
    res.status(404).json({
        errors:'page not found'
    })
})

//connecting with express server
app.listen(5000,()=>{
    console.log('App listening on 5000')
})

// app.use(morgan('dev'))

