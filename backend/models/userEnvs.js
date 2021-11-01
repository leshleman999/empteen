const mongoose = require('mongoose');

const userEnvSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    envObjectId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Env",
        required: true 
    }
})

const UserEnv = mongoose.model('UserEnv',userEnvSchema);
module.exports = UserEnv