const express = require('express');
const router = express.Router();

//require('../db/conn');

const UserEnv = require("../models/userEnvs");
const Env = require("../models/Environments");

router.post('/getuserenvs', async (req, res) => {
    console.log("getuserenvs",req.body)
    const user = req.body;
    try {
        const userEnvs = await UserEnv.find({ email: user.email }).populate("envObjectId");
        res.status(200).send(userEnvs);
    } 
    catch (err) {
        console.log("catch err",err);
    }
  }
  );

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