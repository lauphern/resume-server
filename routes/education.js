const express = require("express");
const router = express.Router();

router.get("/education", (req, res) => {
  res.send("education")
})

module.exports = router;