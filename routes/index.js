const express = require("express");
const e = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const data = req.app.locals.data[req.app.locals.preferredLanguage || "en"];
  res.json({
    info: data.introduction,
    endpoints: [
      `${process.env.DEV_URL}/personal-info`,
      `${process.env.DEV_URL}/professional-experience`,
      `${process.env.DEV_URL}/education`,
      `${process.env.DEV_URL}/certifications`,
      `${process.env.DEV_URL}/volunteer-work`,
      `${process.env.DEV_URL}/hard-skills`,
      `${process.env.DEV_URL}/soft-skills`,
      `${process.env.DEV_URL}/languages`,
      `${process.env.DEV_URL}/portfolio`,
      `${process.env.DEV_URL}/download`,
    ],
  });
});

module.exports = router;
