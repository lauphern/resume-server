if (process.env.NODE_ENV !== "production") require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const helmet = require("helmet");
const cors = require("cors");

const app = express();

mongoose.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true }, (err, db) => {
  if (err) console.error(err);
  else {
    console.log("Database connected");
  }
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({
  origin: "https://laurapascual.com"
}))

app.use(helmet());

//Middleware for handling internationalization
app.use(function (req, res, next) {
  if (req.headers["accept-language"]) {
    const langList = req.headers["accept-language"].split(";");
    if (langList[0].indexOf("es") < 0) req.app.locals.preferredLanguage = "en";
    else req.app.locals.preferredLanguage = "es";
    next();
  } else {
    req.app.locals.preferredLanguage = "en";
    next();
  }
});

//Save the data (translations) in locals
app.use(function (req, res, next) {
  if (!req.app.locals.data) {
    const data = require("./data/basicInfo");
    req.app.locals.data = data;
    next();
  } else {
    next();
  }
});

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
app.use("/api/v1", require("./routes/download"));

app.use(function (err, req, res, next) {
  console.error(err.stack);
  if (err.message) {
    res.status(500).send(err.message);
  } else {
    res.status(500).send("Something broke!");
  }
});

app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!");
});

app.listen(process.env.PORT || 3000, () =>
  console.log(`Server listening on port ${process.env.PORT}`)
);

module.exports = app;
