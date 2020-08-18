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
    console.log("Database connected");
    const User = require("./models/User");

    // app.use("/", (req, res) => {
    //   const username = "hola";
    //   const password = "contra";
    //   User.findOne({username: username})
    //   .then(result => {
    //     if(result) throw new Error();
    //     else {
    //       bcrypt.hash(password, 10, (err, hash) => {
    //         if(err) throw new Error(err);
    //         else {
    //           return User.create({username, password: hash})
    //         }
    //       })
    //     }
    //   })
    //   .then(result => {
    //     res.json({newUser: result});
    //   })
    //   .catch(err => console.error(err))
    // })
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

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.use(function(req, res, next) {
  res.status(404).send("Sorry can't find that!");
});


app.listen(process.env.PORT || 3000, () => console.log(`Server listening on port ${process.env.PORT}`))

module.exports = app