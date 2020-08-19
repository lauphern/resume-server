const express = require("express");
const router = express.Router();
const HardSkill = require("../models/HardSkill");

router.get("/hard-skills", (req, res, next) => {
  if (!req.query.type) next();
  else {
    const { type } = req.query;
    HardSkill.find({ type: type, language: req.app.locals.preferredLanguage })
      .then(result => {
        res.json(result);
      })
      .catch(err => {
        next(err);
      });
  }
});

router.get("/hard-skills", (req, res) => {
  HardSkill.find({ language: req.app.locals.preferredLanguage })
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
