const mongoose = require("mongoose");

const xenvSchema = new mongoose.Schema({
  envName: {
    type: String,
    required: true,
  },
  envDescription: {
    type: String,
    required: true,
  },
  envImageURL: {
      type: String, 
      required: true,

  },
  envActive: {
    type: Boolean,
    required: true,
  },
  envDisplay: {
    type: Boolean,
    required: true,
  },
  envCreateDate:{
    type: Date,
    required: true
  },
  envTeacher: {
    imgURL: String,
    displayName: String,
    aboutMe: String,
    pronouns: String
  },
  envMembers: [{
    email: String,
    imgURL: String,
    displayName: String,
    aboutMe: String,
    pronouns: String
  }],
  envTopics: [{}],
  envAnnouncements: [{
    annTitle:String,
    annContent:String,
    annDate: String,
    annAuthor: {
      imgURL: String,
      displayName: String,
      aboutMe: String,
      pronouns: String
    }
  }],
});

const xEnv = mongoose.model("xEnv", xenvSchema);

module.exports = xEnv;
