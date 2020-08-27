const express = require("express");
const router = express.Router();
const HardSkill = require("../models/HardSkill");

const { hardSkillSearch } = require("../helpers/search");

router.get("/hard-skills", (req, res, next) => {
  if (!req.query.type) next();
  else {
    const { type } = req.query;
    hardSkillSearch({model: HardSkill, type })
      .then(result => {
        res.json(result);
      })
      .catch(err => {
        next(err);
      });
  }
});

router.get("/hard-skills", (req, res, next) => {
  hardSkillSearch({model: HardSkill })
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
