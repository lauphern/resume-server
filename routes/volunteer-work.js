const express = require("express");
const router = express.Router();

router.get("/volunteer-work", (req, res) => {
  res.send("volunteer work")
})

module.exports = router;