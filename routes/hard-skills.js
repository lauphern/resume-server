const express = require("express");
const router = express.Router();
const HardSkill = require("../models/HardSkill");

router.get("/hard-skills", (req, res) => {
  HardSkill.find({language: req.preferredLanguage})
  .then(result => {
    res.json(result);
  })
  .catch(err => {
    next(err);
  })
})

module.exports = router;