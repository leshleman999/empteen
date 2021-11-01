const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");

// using cors
app.use(cors());

dotenv.config({ path: "./config.env" });

//require("./db/conn");
// const User = require('./model/userSchema');
app.use(express.urlencoded({ extended: false }));

app.use(express.json());

// we link the router files to make our route easy
// authentication route
app.use(require("./routes/auth"));
// topics route
const topicsRoutes = require("./routes/topics");
app.use("/topics", topicsRoutes);

const PORT = process.env.PORT;
console.log(PORT);

app.listen(PORT, () => {
  console.log(`server is running at port no ${PORT}`);
});
