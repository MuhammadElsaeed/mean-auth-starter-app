const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/config');


//register route
router.post("/register", (req, res, next) => {
  let newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    username: req.body.username
  });
  console.log(newUser);
  if (newUser.firstName == null || newUser.lastName == null || newUser.email == null ||
    newUser.password == null || newUser.username == null) {
    res.status(400);
    return res.json({
      success: false,
      msg: "please fill all fields"
    });
  };
  User.getUserByUsername(newUser.username, (err, user) => {
    if (err) {
      throw err;
    }
    if (user) {
      res.json({
        success: false,
        msg: "The username already exists! choose another one."
      });
    } else {
      User.getUserByEmail(newUser.email, (err, user1) => {
        if (err) {
          throw err;
        }
        if (user1) {
          res.json({
            success: false,
            msg: "The email already exists! choose another one."
          });
        } else {
          User.addUser(newUser, (err, user) => {
            if (!err) {
              return res.json({
                success: true,
                msg: "User registered successfuly "
              });
            } else {
              res.status(400);
              return res.json({
                success: false,
                msg: err.message
              });
            }

          });
        }
      });
    }
  });
});

//authenticate route
router.post("/auth", (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  User.getUserByUsername(username, (err, user) => {
    if (err) {
      return res.json({
        success: false,
        msg: err.message
      });
    }
    if (!user) {
      return res.json({
        success: false,
        msg: "There is no such a user!"
      });
    } else {
      User.comparePassword(password, user.password, (err, isMatch) => {
        if (err)
          throw err;

        if (!isMatch) {
          return res.json({
            success: false,
            msg: "Incorrect password!"
          });
        } else {
          const token = jwt.sign(user.toJSON(), config.secret, {
            expiresIn: 604800
          });
          res.json({
            success: true,
            token: 'JWT '+token,
            user: {
              id: user._id,
              username: user.username,
              firstName: user.firstName,
              lastName: user.lastName,
              email: user.email
            }
          });
        }
      });
    }
  });

});
//profile route
router.get(["/profile", "/"], passport.authenticate('jwt', {
  session: false
}), (req, res, next) => {
  res.json(req.user);
});

module.exports = router;
