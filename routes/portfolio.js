const express = require("express");
const router = express.Router();

router.get("/portfolio", (req, res) => {
  res.send("portfolio")
})

module.exports = router;