const express = require("express");
const router = express.Router();
const EducationItem = require("../models/EducationItem");

const { educationSearch } = require("../helpers/search");

router.get("/certifications", (req, res, next) => {
  if (!req.query.year) next();
  else {
    const { year } = req.query;
    educationSearch({ model: EducationItem, language: req.app.locals.preferredLanguage, level: "certification" })
      .then(result => {
        let filtered = result.filter(el => {
          return el.start_date <= new Date(year, 11, 31);
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
    educationSearch({ model: EducationItem, language: req.app.locals.preferredLanguage, level: "certification", school_name })
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
  educationSearch({ model: EducationItem, language: req.app.locals.preferredLanguage, level: "certification" })
    .then(result => {
      result.sort((a, b) => b.start_date - a.start_date);
      res.json(result);
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
