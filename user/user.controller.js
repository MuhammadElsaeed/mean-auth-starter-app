'use strict';

const express = require('express');
const router = express.Router();
const User = require('./user');
const passport = require('passport');
const jwt = require('jsonwebtoken');

// register route
router.post('/', (req, res, next) => {
  let reqUser = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    dateOfBirth: req.body.dateOfBirth,
    gender: req.body.gender,
    country: req.body.country,
    state: req.body.state,
    jobTitle: req.body.jobTitle,
    bio: req.body.bio,
    fbAccount: req.body.fbAccount,
    twAccount: req.body.twAccount,
    gAccount: req.body.gAccount,
    lnAccount: req.body.lnAccount,
    role: 'USER',
  };

  const validation = User.validate(reqUser);
  if (!validation.success) {
    res.status(400);

    let msg = '';
    validation.error.details.forEach(function(error) {
      msg += error.message + '.';
    });

    return res.json({
      success: false,
      msg: msg,
    });
  };

  let newUser = new User(reqUser);

  User.getUserByEmail(newUser.email, (err, user1) => {
    if (err) {
      throw err;
    }
    if (user1) {
      res.status(400);
      res.json({
        success: false,
        msg: 'The email already exists! choose another one.',
      });
    } else {
      User.addUser(newUser, (err, user) => {
        if (!err) {
          return res.json({
            success: true,
            msg: 'User registered successfuly ',
          });
        } else {
          res.status(400);
          return res.json({
            success: false,
            msg: err.message,
          });
        }

      });
    }
  });

});

// authenticate route
router.post('/auth', (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  User.getUserByEmail(email, (err, user) => {
    if (err) {
      return res.json({
        success: false,
        msg: err.message,
      });
    }
    if (!user) {
      res.status(404);
      return res.json({
        success: false,
        msg: 'There is no such a user!',
      });
    } else {
      User.comparePassword(password, user.password, (err, isMatch) => {
        if (err)
          throw err;

        if (!isMatch) {
          res.status(404);
          return res.json({
            success: false,
            msg: 'Incorrect password!',
          });
        } else {
          const token = jwt.sign({
            _id: user._id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            jobTitle: user.jobTitle,
            dateOfBirth: user.dateOfBirth,
            gender: user.gender,
            role: user.role,
          }, process.env.JWT_SECRET, {
            expiresIn: 604800,
          });
          res.json({
            success: true,
            token: 'JWT ' + token,
          });
        }
      });
    }
  });

});
// profile route
router.get(['/profile'], passport.authenticate('jwt', {
  session: false,
}), (req, res, next) => {
  res.json(req.user);
});


module.exports = router;
