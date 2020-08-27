const express = require("express");
const router = express.Router();

const EducationItem = require("../models/EducationItem");
const Job = require("../models/Job");
const HardSkill = require("../models/HardSkill");
const Project = require("../models/Project");

const { educationSearch, jobSearch, hardSkillSearch, projectSearch } = require("../helpers/search");

router.get("/download", (req, res) => {
  const { preferredLanguage: language } = req.app.locals
  const data = req.app.locals.data[language || "en"];
  const iterable = [
    data.personalInfo,
    educationSearch({model: EducationItem, language}),
    educationSearch({model: EducationItem, language, level: "certification"}),
    jobSearch({model: Job, language, volunteer: false}),
    jobSearch({model: Job, language, volunteer: true}),
    hardSkillSearch({model: HardSkill, language}),
    data.softSkills,
    projectSearch({model: Project, language}),
    data.languages
  ]
  Promise.all(iterable)
  .then(result => {
    res.json(result)
  })
});

module.exports = router;
