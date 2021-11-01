const mongoose = require('mongoose');

const testEnvSchema = new mongoose.Schema({
    field1: {
        type: String,
        required: true,
    },
    field1: {
        type: String,
        required: true
    }
})

const Test = mongoose.model('Test',testEnvSchema);
module.exports = Test