// import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const cors = require('cors');
require('./config/passport')(passport);
//import database config
const config = require('./config/config');

// intialize app
const app = express();

//server port number
const port = process.env.PORT || 3000;

//
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

//connect to mongodb
mongoose.connect(config.dbUrl, {
  useNewUrlParser: true
});

// import routes
const users = require('./routes/users');

app.use(cors());

app.use(express.static("public"));
app.use("/users", users);
app.get('*', (req, res) => {
  res.redirect('/');
});
app.listen(port, function() {
  console.log("Server startedd on port " + port);
});
