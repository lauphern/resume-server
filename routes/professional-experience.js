const express = require("express");
const router = express.Router();
const Job = require("../models/Job");

router.get("/professional-experience", (req, res, next) => {
  if (!req.query.year) next();
  else {
    const { year } = req.query
    Job.find({ volunteer: false, language: req.app.locals.preferredLanguage })
      .then(result => {
        let filtered = result.filter(el => {
          return (el.start_date <= new Date(year,11,31) && el.end_date >= new Date(year,0,1))
        })
        filtered.sort((a, b) => b.start_date - a.start_date);
        res.json(filtered);
      })
      .catch(err => {
        next(err);
      });
  }
});

router.get("/professional-experience", (req, res) => {
  Job.find({ volunteer: false, language: req.app.locals.preferredLanguage })
    .then(result => {
      result.sort((a, b) => b.start_date - a.start_date);
      res.json(result);
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
