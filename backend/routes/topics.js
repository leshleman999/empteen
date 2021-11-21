const express = require("express");
const router = express.Router();

// router.get("/", (req, res) => {
//   res.send("get all topics");
// });

// router.post("/", (req, res) => {
//   res.send("create a topic");
// });

// router.get("/topics/:id", (req, res) => {
//   res.send("get single topic");
// });

// router.put("/topics/:id", (req, res) => {
//   res.send("update topic");
// });

// router.delete("/topics/:id", (req, res) => {
//   res.send("delete a topic");
// });

const {
  getAllTopics,
  createTopic,
  getSingleTopic,
  updateTopic,
  deleteTopic,
} = require("../controllers/topics");

router.route("/").get(getAllTopics).post(createTopic);
router
  .route("/:topicID")
  .get(getSingleTopic)
  .patch(updateTopic)
  .delete(deleteTopic);

module.exports = router;
