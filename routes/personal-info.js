const express = require("express");
const router = express.Router();

router.get("/personal-info", (req, res) => {
  const data = req.app.locals.data[req.app.locals.preferredLanguage || "en"];
  res.json(data.personalInfo);
})

module.exports = router;