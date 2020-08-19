const express = require("express");
const router = express.Router();

router.get("/personal-info", (req, res) => {
  //TODO
  res.send("personal info")
})

module.exports = router;