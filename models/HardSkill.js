const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HardSkill = mongoose.model(
  "hardskills",
  new Schema({
    name: String,
    type: {
      type: String,
      enum: ["language", "framework", "library", "database", "cloud computing", "design"],
    },
    language: {
      type: String,
      enum: ["en", "es"],
    },
  })
);

module.exports = HardSkill;
