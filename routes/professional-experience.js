const express = require("express");
const router = express.Router();
const Job = require("../models/Job");

router.get("/professional-experience", (req, res) => {
  Job.find({volunteer: false, language: req.app.locals.preferredLanguage})
  .then(result => {
    result.sort((a, b) => b.start_date - a.start_date);
    res.json(result);
  })
  .catch(err => {
    next(err);
  })
})

module.exports = router;