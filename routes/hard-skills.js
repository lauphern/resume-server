const express = require("express");
const router = express.Router();

router.get("/hard-skills", (req, res) => {
  res.send("hard skills")
})

module.exports = router;