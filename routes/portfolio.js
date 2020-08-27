const express = require("express");
const router = express.Router();
const Project = require("../models/Project");

const { projectSearch } = require("../helpers/search");

router.get("/portfolio", (req, res, next) => {
  projectSearch({model: Project})
  .then(result => {
    res.json(result);
  })
  .catch(err => {
    next(err);
  })
})

module.exports = router;