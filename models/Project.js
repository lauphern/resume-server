const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Project = mongoose.model("projects", new Schema({
  title: String,
  url: String,
  technologies: [{type: Schema.Types.ObjectId, ref: 'hardskills'}],
  language: {
    type: String,
    enum: ["en", "es"]
  }
}));

module.exports = Project;