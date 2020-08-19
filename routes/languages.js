const express = require("express");
const { json } = require("body-parser");
const router = express.Router();

router.get("/languages", (req, res) => {
  const data = req.app.locals.data[req.app.locals.preferredLanguage || "en"];
  res.json(data.languages);
})

module.exports = router;