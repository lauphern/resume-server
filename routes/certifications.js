const express = require("express");
const router = express.Router();
const EducationItem = require('../models/EducationItem');

router.get("/certifications", (req, res, next) => {
  EducationItem.find({level: "certification", language: req.app.locals.preferredLanguage})
  .then(result => {
    result.sort((a, b) => b.start_date - a.start_date);
    res.json(result);
  })
  .catch(err => {
    next(err);
  })
})

module.exports = router;