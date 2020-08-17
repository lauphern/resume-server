const express = require("express");
const router = express.Router();

router.get("/languages", (req, res) => {
  res.send("languages")
})

module.exports = router;