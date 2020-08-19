if(process.env.NODE_ENV !== "production") require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
//TODO
const helmet = require("helmet");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const app = express();

mongoose.connect(process.env.DB, { useNewUrlParser: true , useUnifiedTopology: true}, (err, db) => {
  if(err) console.error(err)
  else {
    console.log("Database connected");
    const User = require("./models/User");
    
    /* ---------------- NEW USER CREATION ---------------- */
    //Uncomment this to create a new username
    //Since the API is gonna be private, it doesn't make sense to
    //add this feature to the client-side
    // const username = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    // const password = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    // User.findOne({username: username})
    // .then(result => {
    //   if(result) throw new Error("That username already exists");
    //   else {
    //     bcrypt.hash(password, 10, (err, hash) => {
    //       if(err) throw new Error(err);
    //       else {
    //         User.create({username, password: hash})
    //         .then(res => console.log(res))
    //         .catch(err => console.error(err))
    //       }
    //     })
    //   }
    // })
    // .catch(err => console.error(err))
  }
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Middleware for handling internationalization
app.use(function(req, res, next) {
  if(req.headers["accept-language"]) {
    const langList = req.headers["accept-language"].split(";")
    if(langList[0].indexOf("en")) req.app.locals.preferredLanguage = "es";
    else req.app.locals.preferredLanguage = "en";
    next()
  } else {
    req.app.locals.preferredLanguage = "en";
    next()
  }
})

app.use("/api/v1", require("./routes/index"));

//Middleware for handling authorization
// app.use(function(req, res, next){
//   if(!req.headers.authorization) {
  //TODO
  //hacer lo del login - decode the string you get in the header and get the user object
  //from the database and compare with the username and the hash
//     next(new Error("Authorization information is missing or invalid"))
//   }
//   else next()
// })

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
  if(err.message == "Authorization information is missing or invalid") {
    res.status(401).send(err.message)
  } else if(err.message) {
    res.status(500).send(err.message)
  } else {
    res.status(500).send('Something broke!')
  }
})

app.use(function(req, res, next) {
  res.status(404).send("Sorry can't find that!");
});

app.listen(process.env.PORT || 3000, () => console.log(`Server listening on port ${process.env.PORT}`))

module.exports = app