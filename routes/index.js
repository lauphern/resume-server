const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const data = req.app.locals.data[req.app.locals.preferredLanguage || "en"];
  res.json({
    info: data.introduction,
    endpoints: [
      `${process.env.URL}/personal-info`,
      `${process.env.URL}/download`,
      `${process.env.URL}/professional-experience`,
      `${process.env.URL}/education`,
      `${process.env.URL}/certifications`,
      `${process.env.URL}/volunteer-work`,
      `${process.env.URL}/hard-skills`,
      `${process.env.URL}/soft-skills`,
      `${process.env.URL}/languages`,
      `${process.env.URL}/portfolio`,
    ],
  });
});

module.exports = router;
