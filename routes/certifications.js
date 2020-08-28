const express = require("express");
const router = express.Router();
const EducationItem = require("../models/EducationItem");

const { educationSearch } = require("../helpers/search");

router.get("/certifications", (req, res, next) => {
  const { year, school_name } = req.query;
  educationSearch({ model: EducationItem, language: req.app.locals.preferredLanguage, level: "certification", school_name: school_name })
    .then(result => {
      if(year) {
        let filtered = result.filter(el => {
          return el.start_date <= new Date(year, 11, 31);
        });
        filtered.sort((a, b) => b.start_date - a.start_date);
        res.json(filtered);
      } else {
        result.sort((a, b) => b.start_date - a.start_date);
        res.json(result);
      }
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
