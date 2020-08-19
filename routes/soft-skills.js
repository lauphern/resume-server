const express = require("express");
const router = express.Router();

router.get("/soft-skills", (req, res) => {
  const data = req.app.locals.data[req.app.locals.preferredLanguage || "en"];
  res.json(data.softSkills);
})

module.exports = router;