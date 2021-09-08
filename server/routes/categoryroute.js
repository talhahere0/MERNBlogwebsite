const express = require('express');
const router = express();


const uploadMulter = require('../middlewares/upload.js')


const { 
    createCategory,getalldata
}=require('../controllers/category.controllers.js')

router.post('/category',uploadMulter,createCategory)
router.get('/get',getalldata)

module.exports =router