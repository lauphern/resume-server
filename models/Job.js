const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Job = mongoose.model(
  "jobs",
  new Schema({
    title: String,
    company: { company_name: String, company_location: String },
    volunteer: Boolean,
    year: Number,
    tasks: [String],
    language: {
      type: String,
      enum: ["en", "es"]
    }
  })
);

module.exports = Job;
