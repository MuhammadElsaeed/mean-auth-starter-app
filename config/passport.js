const JwtStrategy = require('passport-jwt').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/user');
module.exports = function(passport) {


  // jwt strategy
  let jwt_opts = {};
  jwt_opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
  jwt_opts.secretOrKey = process.env.JWT_SECRET;
  passport.use(new JwtStrategy(jwt_opts, (jwt_payload, done) => {
    User.getUserById(jwt_payload._id, (err, user) => {
      if (!err) {
        if (user) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      } else {
        return done(err, false);
      }
    });
  }));
};
