const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Job = mongoose.model(
  "jobs",
  new Schema({
    title: String,
    company: { company_name: String, company_location: String },
    year: Number,
    tasks: [String]
  })
);

module.exports = Job;
