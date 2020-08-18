if(process.env.NODE_ENV !== "production") require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
//TODO
const helmet = require("helmet");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(process.env.DB, { useNewUrlParser: true , useUnifiedTopology: true}, (err, db) => {
  if(err) console.error(err)
  else {
    console.log(db)
  }
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/v1", require("./routes/index"));
app.use("/api/v1", require("./routes/personal-info"));
app.use("/api/v1", require("./routes/professional-experience"));
app.use("/api/v1", require("./routes/education"));
app.use("/api/v1", require("./routes/certifications"));
app.use("/api/v1", require("./routes/volunteer-work"));
app.use("/api/v1", require("./routes/hard-skills"));
app.use("/api/v1", require("./routes/soft-skills"));
app.use("/api/v1", require("./routes/languages"));
app.use("/api/v1", require("./routes/portfolio"));


app.listen(process.env.PORT || 3000, () => console.log(`Server listening on port ${process.env.PORT}`))

module.exports = app