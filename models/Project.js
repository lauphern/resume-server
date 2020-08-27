const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Project = mongoose.model("projects", new Schema({
  title: String,
  url: String,
  repository: String,
  technologies: [{type: Schema.Types.ObjectId, ref: 'hardskills'}]
}));

module.exports = Project;