var jwt = require("jsonwebtoken");
const User = require("../models/User");
var bcrypt = require("bcryptjs");

exports.login = async (req, res, next) => {
  try {
    // search email first
    // console.log(req)
    const user = await User.findOne({ email: req.body.email });

    //  if user exist
    if (user) {
      // compare password with hash
      const passwordCorrect = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (passwordCorrect) {
        // create token if password correct
        const token = jwt.sign(
          {
            email: req.body.email,
          },
          "sdsdsd"
        );
        // return youve been login in
        return res.status(202).json({ message: "You've been login", token });
      } else {
        // return 401 code and wrong password
        return res.status(401).json({ message: "Wrong password" });
      }
    } else {
      // return 404 code and user not found
      return res.status(404).json({ message: "User not found" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

exports.signUp = async (req, res, next) => {
  try {
    const pw = await bcrypt.hash(req.body.password, 10);
    const data = await User.create({
      email: req.body.email,
      password: pw,
    });
    return res.status(201).json({ message: "User created", data });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
