const express = require("express");
const router = express.Router();
const Project = require("../models/Project");

router.get("/portfolio", (req, res) => {
  Project.find({language: req.preferredLanguage})
  .then(result => {
    res.json(result);
  })
  .catch(err => {
    next(err);
  })
})

module.exports = router;