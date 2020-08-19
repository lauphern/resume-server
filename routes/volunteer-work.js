const express = require("express");
const router = express.Router();
const Job = require("../models/Job");

//TODO add year param
router.get("/volunteer-work", (req, res) => {
  Job.find({volunteer: true, language: req.app.locals.preferredLanguage})
  .then(result => {
    result.sort((a, b) => b.start_date - a.start_date);
    res.json(result);
  })
  .catch(err => {
    next(err);
  })
})

module.exports = router;