const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// TOPIC SCHEMA
// const topicSchema = new mongoose.Schema({
//   envID: {
//     type: String,
//     required: true,
//   },
//   topImage: {
//     type: String,
//     default: null,
//   },
//   topTitle: {
//     type: String,
//     required: true,
//   },
//   topContent: {
//     type: String,
//     required: true,
//   },
//   topDate: {
//     type: Date,
//   },
//   topAuthor: {
//     imgUrl: String,
//     displayName: String,
//     aboutMe: String,
//     pronouns: String,
//   },
//   topRating: {
//     type: Number,
//   },
//   postTime: String,
//   //   comments: [commentSchema],
// });

// ENVIRONMENT SCHEMA
const envSchema = new mongoose.Schema({
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
 envCreateDate: {
    type: Date,
    required: true,
  },
  envTeacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true 
  },
  envAnnouncements: [
    {
      annTitle: String,
      annContent: String,
      annDate: String,
      annAuthor: {
        imgURL: String,
        displayName: String,
        aboutMe: String,
        pronouns: String,
      },
    },
  ],
  envTopics: [{
    envID: {
      type: String,
      required: true,
    },
    topImage: {
      type: String,
      default: null,
    },
    topTitle: {
      type: String,
      required: true,
    },
    topContent: {
      type: String,
      required: true,
    },
    topDate: {
      type: Date,
    },
    topAuthor: {
      imgUrl: String,
      displayName: String,
      aboutMe: String,
      pronouns: String,
    },
    topRating: {
      type: Number,
    },
    postTime: String,
    //   comments: [commentSchema],
  }]
});

// const Topic = mongoose.model("Topic", topicSchema);
const Env = mongoose.model("Env", envSchema);

module.exports = Env;
