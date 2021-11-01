const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
// const cors = require('cors');

dotenv.config({ path: './config.env'});

//require('./db/conn');
// const User = require('./model/userSchema');

app.use(express.json());

// we link the router files to make our route easy
// app.use('cors')

app.use(require('./routes/auth'));
app.use(require('./routes/environments'));
app.use(require('./routes/manage-environments'));

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`server is running at port no ${PORT}`);
})