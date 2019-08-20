const router = require("express").Router();
const storyController = require("../controllers/storyController.js");

// Matches with "api/story"
router.route("/story")
    .post(storyController.create);

// Matches with "api/story/:id"
router.route("/story/:id")
    .get(storyController.findById)
    .put(storyController.update);

module.exports = router;