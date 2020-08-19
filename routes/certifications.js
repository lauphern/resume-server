const express = require("express");
const router = express.Router();
const EducationItem = require("../models/EducationItem");

router.get("/certifications", (req, res, next) => {
  if (!req.query.year) next();
  else {
    const { year } = req.query;
    EducationItem.find({ level: "certification", language: req.app.locals.preferredLanguage })
      .then(result => {
        let filtered = result.filter(el => {
          return el.start_date <= new Date(year, 11, 31) && el.end_date >= new Date(year, 0, 1);
        });
        filtered.sort((a, b) => b.start_date - a.start_date);
        res.json(filtered);
      })
      .catch(err => {
        next(err);
      });
  }
});

router.get("/certifications", (req, res, next) => {
  if (!req.query.school_name) next();
  else {
    const { school_name } = req.query;
    EducationItem.find({
      "school.school_name": school_name,
      level: "certification",
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

router.get("/certifications", (req, res, next) => {
  EducationItem.find({ level: "certification", language: req.app.locals.preferredLanguage })
    .then(result => {
      result.sort((a, b) => b.start_date - a.start_date);
      res.json(result);
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
