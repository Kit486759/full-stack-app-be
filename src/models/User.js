const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    require: true, unique: true,
  },
  password: { type: String, require: true },
  post:[{
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    type: {
      type: String,
    },
  }]
});

const User = mongoose.model('User', UserSchema)

module.exports = User;
