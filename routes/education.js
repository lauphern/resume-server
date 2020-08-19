const express = require("express");
const router = express.Router();
const EducationItem = require('../models/EducationItem');

router.get("/education", (req, res) => {
  EducationItem.find({level: {$ne: "certification"}, language: req.app.locals.preferredLanguage})
  .then(result => {
    res.json(result);
  })
  .catch(err => {
    next(err);
  })
})

module.exports = router;