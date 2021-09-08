const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    creator:{
        type:String
    },
    title:{type:String},
    message:{type:String},
    tags:{type:String},
    name:{
        type:String,
    },
    image:{
        type:String,
    }
})

module.exports = mongoose.model('Category',categorySchema)