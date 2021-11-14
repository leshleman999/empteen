const mongoose = require('mongoose');

const xuserEnvSchema = new mongoose.Schema({
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

const UserEnvx = mongoose.model('UserEnvx',xuserEnvSchema);
module.exports = UserEnvx