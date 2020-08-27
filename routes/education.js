const express = require("express");
const router = express.Router();
const EducationItem = require("../models/EducationItem");

const { educationSearch } = require("../helpers/search");

router.get("/education", (req, res, next) => {
  if (!req.query.year) next();
  else {
    const { year } = req.query;
    educationSearch({ model: EducationItem, language: req.app.locals.preferredLanguage })
      .then(result => {
        let filtered = result.filter(el => {
          if (el.finished) {
            return el.start_date <= new Date(year, 11, 31) && el.end_date >= new Date(year, 0, 1);
          } else {
            return el.start_date <= new Date(year, 11, 31);
          }
        });
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
    const { level } = req.query;
    educationSearch({ model: EducationItem, language: req.app.locals.preferredLanguage, level })
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
  educationSearch({ model: EducationItem, language: req.app.locals.preferredLanguage })
    .then(result => {
      result.sort((a, b) => b.start_date - a.start_date);
      res.json(result);
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
