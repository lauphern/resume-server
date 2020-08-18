const express = require("express");
const router = express.Router();
const EducationItem = require('../models/EducationItem');

router.get("/certifications", (req, res, next) => {
  EducationItem.findOne({level: "certification", language: req.preferredLanguage})
  .then(result => {
    res.json(result);
  })
  .catch(err => {
    next(err);
  })
})

module.exports = router;