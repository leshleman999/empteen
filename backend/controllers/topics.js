// import environment model schema
const { Env, Topic } = require("../models/Environments");
// const Topics = require("../models/topic");

// GET ALL TOPICS FROM ONE ENVIRONMENT
const getAllTopics = async (req, res) => {
  try {
    // console.log("body", res.body);
    const { envID } = req.params;
    console.log(envID);
    // finds all topics within current environment
    // const topics = await Topics.find({ envId: envID });
    const topics = await Topic.find({ envID: "615db09f7eed00f3b4d9a053" });
    // const environment = await Env.find({});
    // prints out all the topics for each group
    // const newEnvironment = environment.map((topics) => {
    //   const { _id, envName, envTopics } = topics;
    //   return { _id, envName, envTopics };
    // });
    // const newEnvironment = environment.forEach((topics) => {
    //   const { _id, envName, envTopics } = topics;
    //   return { _id, envName, envTopics };
    // });
    // res.status(200).send(environment);
    // const { _id, envName, envTopics } = environment;
    res.status(200).json(topics);
    if (!environment) {
      return res.status(404).json({ msg: `no environment with id: ${envID}` });
    }
  } catch (error) {
    res.status(500).json({ msg: "cannot pull all topics" });
  }
};

// finds id for one environment
// const environment = await Env.findOne({ _id: envID });
// const { envTopics } = environment;
// if (envID === Number(environment._id)) {
//   console.log(`will add to ${envTopics.envName}`);
// }
// const { envTopics } = Env;
// console.log(req.body);
// post data in envTopics

// req - gets copy of request from body
// CREATE A TOPIC IN ENVIRONMENT
const createTopic = async (req, res) => {
  try {
    const { envID } = req.params;
    // const environment = await Env.findOne({ _id: envID });
    // console.log("envID", envID);
    // const { envTopics } = Env;
    // console.log("req.body", req.body);
    const payload = {
      envId: envID,
      ...req.body,
    };
    const postTopic = await Topic.create(payload);
    res.status(201).json({ postTopic });
    console.log(postTopic._id);
    // Env.envTopics.push(postTopic._id);
    // await doc.save();
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

// GET ONE TOPIC
const getSingleTopic = async (req, res) => {
  try {
    const { topicID } = req.params;
    // const environment = await Env.findOne({ _id: envID });
    const topic = await Topic.findOne({ _id: topicID }).populate("envID");
    // console.log("topic", topic, "envid", topic.envID);
    // const singleTopic = Env.findOne({ _id: topic.envID }).populate(topic)
    console.log("single topic", topic);
    res.status(200).send(topic);
  } catch (error) {
    res.status(500).json({ msg: "error" });
  }
  // res.send("get a single topic");
};

const updateTopic = async (req, res) => {
  try {
    const { topicID } = req.params;
    const updateTopic = await Topic.findByIdAndUpdate(
      { _id: topicID },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(200).send(updateTopic);
  } catch (error) {
    res.status(500).json({ msg: "error" });
  }
  // res.send("update topic");
};

const deleteTopic = async (req, res) => {
  try {
    const { topicID } = req.params;
    const topicDelete = await Topic.findOneAndDelete({ _id: topicID });
    res.send(topicDelete);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getAllTopics,
  createTopic,
  getSingleTopic,
  updateTopic,
  deleteTopic,
};
