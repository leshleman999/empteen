const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");

// using cors
app.use(cors());

dotenv.config({ path: "./config.env" });

//had to turn this off because I didn't have it
require("./db/conn");



// const User = require('./model/userSchema');
app.use(express.urlencoded({ extended: false }));

app.use(express.json());

// we link the router files to make our route easy
// authentication route
const authRoutes = require("./routes/auth");
app.use("/", authRoutes);
//app.use(require("./routes/auth"));
// topics route
const topicsRoutes = require("./routes/topics");
app.use("/topics", topicsRoutes);

const PORT = process.env.PORT;
console.log(PORT);

app.listen(PORT, () => {
  console.log(`server is running at port no ${PORT}`);
});
