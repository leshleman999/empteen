const express = require('express');
const router = express.Router();

require('../db/conn');

const UserEnv = require("../models/userEnvs");
const Env = require("../models/Environments");



router.post('/getuserenvs', async (req, res) => {
    const userEmail = req.body;
    console.log("receiving user Email", userEmail.email)
    let returnData = [];
    
    try
    {
        const userEnvironments = await UserEnv.find({ email: userEmail.email}).populate("envObjectId");
        console.log("backend getuserenvs",userEnvironments)
        userEnvironments.map((e)=>(
            returnData.push(e.envObjectId)
            ))
        res.status(200).send(returnData);
    } 
    catch (err) {
        console.log("catch err",err);
    }
  }
  );




//=================================================================================================================
    // DB.db.findValueInArrayWithMultipleCriteriaDemo.find().pretty();
// DB.getCollection('envs').aggregate([{
//     $lookup:
//     {
//     From: “Grades”,
//     localField: “_id”,
//     foreignField: “_id”,
//     as: “StudentMarks”
//     }
//     }])


  //===========================================================
  
  router.post('/get-general', async (req, res) => {
    
    console.log("get-general",req.body)
    const env = req.body;
    try {
        const curEnv = await Env.find({ envName: env.envName })
        res.status(200).send(curEnv);
    } 
    catch (err) {
        console.log("catch err",err);
    }
  }
  
  );
  module.exports = router;