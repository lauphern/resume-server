const express = require("express");
const router = express.Router();

router.get("/professional-experience", (req, res) => {
  res.send("professional experience")
})

module.exports = router;