const express = require("express");
const router = express.Router();
const HardSkill = require("../models/HardSkill");

//TODO add type param
router.get("/hard-skills", (req, res) => {
  HardSkill.find({language: req.app.locals.preferredLanguage})
  .then(result => {
    res.json(result);
  })
  .catch(err => {
    next(err);
  })
})

module.exports = router;