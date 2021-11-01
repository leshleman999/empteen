const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    hashedPassword: {
        type: String,
        required: true,
    },
    firstname: {
        type: String,
        required: false,
    },
    lastname: {
        type: String,
        required: false,
    },
    active: {
        type: String,
        required: true,
    },
    displayname: String,
    image: String,
    guardianname: String,
    guardianemail: String,
    city: String,
    state: String,
    country: String,
    teen: Boolean,
    phonenumber: String,
    birthday: String,
    timezone: String,
    aboutme: String,
    pronouns: String,
    feelings: String,
    isAdmin: Boolean,
    cpassword: {
        type: String,
        required: true
    },
    // tokens: [
    //     {
    //         token: {
    //             type: String,
    //             required: true
    //         }
    //     }
    // ]
})
// we are hashing the password
userSchema.pre("save", async function (next) {
    console.log("Hi from inside");
if(this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
    this.cpassword = await bcrypt.hash(this.cpassword, 12);
}
next();
});
// we are generating token
// userSchema.methods.generateAuthToken = async function() {
// try {
//     let token = jwt.sign({_id:this._id}, process.env.SECRET_KEY);
//     this.tokens = this.tokens.concat({token: token});
//     await this.save();
//     return token;
// } catch (err) {
//     console.log(err);
// }
// }
const User = mongoose.model("User",userSchema);
module.exports = User