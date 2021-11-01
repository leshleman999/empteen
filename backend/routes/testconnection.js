const express = require('express');
const router = express.Router();


//require('../db/conn');
const Test = require("../models/testConnection");

router.get('/test', async (req, res) => {
   
    try {
        
        const { field1} = req.body;
        // console.log('backend email password',email,password)
  
        const test = await Test.findOne({ field1: field1 });
  
        res.status(200).send(userLogin)
  
    } 
    catch (err) {
        console.log("catch err",err);
    }
  });

  module.exports = router;