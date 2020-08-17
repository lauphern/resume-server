const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    info: "This is the Resume API",
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
    ],
  });
});

module.exports = router;
