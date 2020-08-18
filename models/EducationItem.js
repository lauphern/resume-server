const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EducationItem = mongoose.model("educationitems", new Schema({
  title: String,
  school: {
    school_name: String,
    school_location: String
  },
  level: {
    type: String,
    enum: ["bachelor", "bootcamp", "online-school", "other"]
  },
  year: Number,
  skills: [String]
}));

module.exports = EducationItem;