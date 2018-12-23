'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const joi = require('joi');

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  jobTitle: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
  },
  fbAccount: {
    type: String,
  },
  twAccount: {
    type: String,
  },
  gAccount: {
    type: String,
  },
  lnAccount: {
    type: String,
  },
});
const User = module.exports = mongoose.model('User', userSchema);

const userValidationSchema = joi.object().keys({
  firstName: joi.string().trim().lowercase().required(),
  lastName: joi.string().trim().lowercase().required(),
  email: joi.string().email().lowercase().required(),
  password: joi.string().min(6).required(),
  dateOfBirth: joi.date().max('1-1-2005').required(),
  gender: joi.string().uppercase().valid(['MALE', 'FEMALE']).required(),
  country: joi.string().trim().lowercase().required(),
  state: joi.string().trim().lowercase().required(),
  jobTitle: joi.string().trim().lowercase().required(),
  role: joi.string().uppercase().valid(['USER', 'ADMIN']).required(),
  bio: joi.string().allow(''),
  fbAccount: joi.string().uri(),
  twAccount: joi.string().uri(),
  gAccount: joi.string().uri(),
  lnAccount: joi.string().uri(),
});


module.exports.validate = function(user) {
  const result = userValidationSchema.validate(user, {
    abortEarly: false,
  });
  if (result.error) {
    return {
      success: false,
      error: result.error,
    };
  }
  return {
    success: true,
  };
};

module.exports.getUserById = function(id, callback) {
  User.findById(id, callback).select('-password');
};

module.exports.deleteUserById = function(id, callback) {
  User.deleteOne({
    _id: id,
  }, callback);
};

module.exports.getUserByEmail = function(email, callback) {
  const query = {
    email: email,
  };
  User.findOne(query, callback);
};

module.exports.addUser = function(user, callback) {
  bcrypt.genSalt((err, salt) => {
    if (err) {
      throw err;
    }
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) {
        throw err;
      } else {
        user.password = hash;
        user.save(callback);
      }
    });

  });
};


module.exports.comparePassword = function(pwd, hash, callback) {
  bcrypt.compare(pwd, hash, (err, isMatch) => {
    callback(err, isMatch);
  });
};
