const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }

});

const User = module.exports = mongoose.model("User", userSchema);

module.exports.getUserById = function(id, callback) {
  User.findById(id, callback);
};

module.exports.deleteUserById = function(id, callback) {
  User.deleteOne({
    _id: id
  }, callback);
};

module.exports.getUserByUsername = function(username, callback) {
  const query = {
    username: username
  };
  User.findOne(query, callback);
};


module.exports.getUserByEmail = function(email, callback) {
  const query = {
    email: email
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
