const express = require("express");
const router = express.Router();
const EducationItem = require("../models/EducationItem");

router.get("/education", (req, res, next) => {
  if (!req.query.year) next();
  else {
    const { year } = req.query
    EducationItem.find({
      level: { $ne: "certification" },
      language: req.app.locals.preferredLanguage,
    })
      .then(result => {
        let filtered = result.filter(el => {
          if(el.finished) {
            return (el.start_date <= new Date(year,11,31) && el.end_date >= new Date(year,0,1))
          } else {
            return el.start_date <= new Date(year,11,31)
          }
        })
        filtered.sort((a, b) => b.start_date - a.start_date);
        res.json(filtered);
      })
      .catch(err => {
        next(err);
      });
  }
});

router.get("/education", (req, res, next) => {
  if (!req.query.level) next();
  else {
    const { level } = req.query
    EducationItem.find({
      level: level,
      language: req.app.locals.preferredLanguage,
    })
      .then(result => {
        result.sort((a, b) => b.start_date - a.start_date);
        res.json(result);
      })
      .catch(err => {
        next(err);
      });
  }
});

router.get("/education", (req, res, next) => {
  EducationItem.find({
    level: { $ne: "certification" },
    language: req.app.locals.preferredLanguage,
  })
    .then(result => {
      result.sort((a, b) => b.start_date - a.start_date);
      res.json(result);
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
