const express = require("express");
const router = express.Router();
const Job = require("../models/Job");

router.get("/volunteer-work", (req, res) => {
  Job.find({language: req.preferredLanguage})
  .then(result => {
    res.json(result);
  })
  .catch(err => {
    next(err);
  })
})

module.exports = router;