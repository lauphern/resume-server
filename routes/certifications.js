const express = require("express");
const router = express.Router();

router.get("/certifications", (req, res) => {
  res.send("certifications")
})

module.exports = router;