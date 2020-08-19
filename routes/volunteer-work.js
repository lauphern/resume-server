const express = require("express");
const router = express.Router();
const Job = require("../models/Job");

router.get("/volunteer-work", (req, res) => {
  Job.find({volunteer: true, language: req.app.locals.preferredLanguage})
  .then(result => {
    res.json(result);
  })
  .catch(err => {
    next(err);
  })
})

module.exports = router;