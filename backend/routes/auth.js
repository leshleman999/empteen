const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

require('../db/conn.js');
const User = require("../models/user");


// Async-Await
router.post('/register', async (req, res) => {

    const { email, password, cpassword } = req.body;

    if(!email || !password || !cpassword) {
        return res.status(422).json({error:"Please fill in the fields properly"});
    }

    try{

        const userExist = await User.findOne({ email: email });
            
        if(userExist) {
                return res.status(422).json({error:"Email already exists"});

        } else if (password != cpassword) {
                return res.status(422).json({error:"Passwords do not match"});

        } else {

                const user = new User({  
                email,
                hashedPassword: password,
                firstname: "",
                lastname:"",
                active:false,
                displayname: "",
                image: "",
                guardianname: "",
                guardianemail: "",
                city: "",
                state: "",
                country: "",
                teen: false,
                phonenumber: "",
                birthday: "",
                timezone: "",
                pronouns: "",
                isAdmin: false,
                cpassword: cpassword
                // tokens: []              
                });
                    // Daniel DeMire
                await user.save();

                res.status(201).json({message: "User registered sucessfully!" });
            }

        } catch (err) {
                console.log(err);
    }
        
});



router.post('/signin', async (req, res) => {
   console.log("req.body:",req.body)
    try {
        let token;
        const { email, password} = req.body;
        // console.log('backend email password',email,password)
        if (!email || !password) {
            return res.status(400).json({error: "Plz Filled the data"})
        }
        console.log("backend email",email)
        const userLogin = await User.findOne({ email: email });

        // console.log("backend userLogin",userLogin);


        if (!userLogin) {
            // console.log("user login exists")
            // const isMatch = await bcrypt.compare(password, userLogin.hashedPassword);

            // token = await userLogin.generateAuthToken();
            // // console.log(token);

            // res.cookie("jwtoken", token, {
            //     expires: new Date(Date.now() + 25892000000),
            //     httpOnly: true
            // });

        //   if (false) {
              res.status(400).json({error: "Backend Invalid Credentials"});
          } else {
              res.status(200).send(userLogin)
          }
      
      
     
        // } 
    } 
    catch (err) {
        console.log("catch err",err);
    }
}
  
);

router.get('/getUser', async (req, res) => {
   
  try {
      
      const { email} = req.body;
      // console.log('backend email password',email,password)

      const userLogin = await User.findOne({ email: email });

      res.status(200).send(userLogin)

  } 
  catch (err) {
      console.log("catch err",err);
  }
}

);

router.get('/getMembers', async (req, res) => {
   
    try {
        
        const users = await User.find();
  
        res.status(200).send(users)
  
    } 
    catch (err) {
        console.log("catch err",err);
    }
  }
  
  );

module.exports = router;