const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = mongoose.model("users", new Schema({
  username: String,
  password: String
}));

module.exports = User;