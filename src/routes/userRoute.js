const express = require("express");
const router = express.Router();
const { addPost,allPosts } = require("../controllers/user");

router.post("/add-post", addPost);
router.get("/all-posts", allPosts);

module.exports = router;
