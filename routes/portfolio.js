const express = require("express");
const router = express.Router();
const Project = require("../models/Project");

router.get("/portfolio", (req, res, next) => {
  Project.find({language: req.app.locals.preferredLanguage})
  .then(result => {
    res.json(result);
  })
  .catch(err => {
    next(err);
  })
})

module.exports = router;