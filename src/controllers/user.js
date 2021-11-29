const User = require("../models/User");
const jwt = require("jsonwebtoken");

exports.allPosts = async (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];
    const userEmail = await jwt.decode(token).email;
    const user = await User.findOne({ email: userEmail });

    if (user) {
      return res
        .status(202)
        .json({ message: "Posts received", data: user.post });
    }
  } catch (err) {
    return res.status(500).json({ message: `There are error ${err}` });
  }
};

exports.addPost = async (req, res, next) => {
  // receive token from request header
  const token = req.headers["x-access-token"];
  console.log(token);
  console.log(req.body);

  // decode token , get user email
  const userEmail = await jwt.decode(token).email;
  const user = await User.findOne({ email: userEmail });
  // const post = await new Post

  if (user) {
    await User.updateOne({ email: userEmail }, { $push: { post: req.body } });
  }

  return res.status(202).json({ message: "post added" });
};

exports.deletePost = async (req, res, next) => {
  res.status(202).json({ message: "post added" });
};
