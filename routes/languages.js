const express = require("express");
const { json } = require("body-parser");
const router = express.Router();

router.get("/languages", (req, res) => {
  if(req.preferredLanguage === "es") {
    res.json({
      "Español": "lengua maternal",
      "Inglés": "C1 APTIS British Council"
    })
  } else {
    res.json({
      Spanish: "mother tongue",
      English: "C1 APTIS British Council"
    })
  }
})

module.exports = router;