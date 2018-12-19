const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('dotenv').config();


//register route
router.post("/register", (req, res, next) => {
  let newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    role: "ADMIN"
  });
  if (newUser.firstName == null || newUser.lastName == null || newUser.email == null ||
    newUser.password == null) {
    res.status(400);
    return res.json({
      success: false,
      msg: "please fill all fields"
    });
  };

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

});

//authenticate route
router.post("/auth", (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  User.getUserByEmail(email, (err, user) => {
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
          const token = jwt.sign({
            _id: user._id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            role: user.role
          }, process.env.JWT_SECRET, {
            expiresIn: 604800
          });
          res.json({
            success: true,
            token: 'JWT ' + token,
            user: {
              id: user._id,
              email: user.email,
              firstName: user.firstName,
              lastName: user.lastName,
              role: user.role
            }
          });
        }
      });
    }
  });

});
//profile route
router.get(["/profile"], passport.authenticate('jwt', {
  session: false
}), (req, res, next) => {
  res.json(req.user);
});


module.exports = router;
