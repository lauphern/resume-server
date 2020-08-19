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
    enum: ["bachelor", "bootcamp", "nanodegree", "certification", "other"]
  },
  start_date: Date,
  end_date: Date,
  finished: Boolean,
  skills: [String],
  language: {
    type: String,
    enum: ["en", "es"]
  }
}));

module.exports = EducationItem;