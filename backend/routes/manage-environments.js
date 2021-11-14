const express = require('express');
const router = express.Router();

//require('../db/conn');

const Env = require("../models/Environments");


router.post("/getenvs", async (req, res) => {
    try{

      const result = await Env.find();
      res.status(200).send(result);
      

    } 
    catch (err) {
      console.log(err);
  }
});



//add Environment to database
router.post("/addEnv", async (req, res) => {
  const { envName, envDescription, envActive, envDisplay, envImageURL, envCreateDate } = req.body;

  const env = new Env({
    envName,
    envDescription,
    envImageURL,
    envActive: false,
    envDisplay: false,
    envCreateDate: new Date()
  });
  await env
    .save()
    .then((result) => {
      result.status(200).send(result);
    })
    .catch((error) => {
      res.status(500).send("Could not save the environment. Error: " + error);
    });
});

const User = require("../models/Environments");



module.exports = router;
