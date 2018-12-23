'use strict';

const assert = require('chai').assert;

const User = require('./user');

const UUID = require('uuid');
describe('user', function() {
  const uuid = UUID();
  let john = new User({
    firstName: 'Muhammad',
    lastName: 'Alsaied',
    email: uuid + '@example.com',
    password: '12345',
    dateOfBirth: new Date('1996-02-26'),
    gender: 'MAlE',
    country: 'Egypt',
    state: 'El Dakahlia',
    jobTitle: 'Developer',
    bio: 'I was born and I will die.',
    role: 'USER',
  });

  it('saves user to database', function(done) {

    User.addUser(john, function(err, user) {
      if (err) {
        assert.fail(err.message);
      } else {
        assert.equal(john.email, user.email);
        assert.equal(john.password, user.password);
        assert.equal(john.firstName, user.firstName);
        assert.equal(john.lastName, user.lastName);
        assert.equal(john.dateOfBirth.getTime(), user.dateOfBirth.getTime());
        assert.equal(john.gender, user.gender);
        assert.equal(john.country, user.country);
        assert.equal(john.state, user.state);
        assert.equal(john.jobTitle, user.jobTitle);
        assert.equal(john.bio, user.bio);
        assert.equal(john.role, user.role);
      }
      done();
    });
  });


  it('gets user by email',
    function(done) {
      User.getUserByEmail(john.email, (err, user) => {
        if (err) {
          assert.fail(err.message);
        } else {
          assert.equal(john.email, user.email);
          assert.equal(john.password, user.password);
          assert.equal(john.firstName, user.firstName);
          assert.equal(john.lastName, user.lastName);
          assert.equal(john.dateOfBirth.getTime(), user.dateOfBirth.getTime());
          assert.equal(john.gender, user.gender);
          assert.equal(john.country, user.country);
          assert.equal(john.state, user.state);
          assert.equal(john.jobTitle, user.jobTitle);
          assert.equal(john.bio, user.bio);
          assert.equal(john.role, user.role);
        }
        done();
      });
    });

  it('gets user by id',
    function(done) {
      User.getUserById(john.id, (err, user) => {
        if (err) {
          assert.fail(err.message);
        } else {
          assert.equal(john.email, user.email);
          assert.equal(john.firstName, user.firstName);
          assert.equal(john.lastName, user.lastName);
          assert.equal(john.dateOfBirth.getTime(), user.dateOfBirth.getTime());
          assert.equal(john.gender, user.gender);
          assert.equal(john.country, user.country);
          assert.equal(john.state, user.state);
          assert.equal(john.jobTitle, user.jobTitle);
          assert.equal(john.bio, user.bio);
          assert.equal(john.role, user.role);
        }
        done();
      });
    });


  it('deletes user by id',
    function(done) {
      User.deleteUserById(john.id, (err) => {
        if (err) {
          assert.fail(err.message);
        } else {
          User.getUserById(john.id, (err, user) => {
            if (err) {
              assert.fail(err.message);
            } else {
              assert.isNotOk(user);

            }
          });
        }
        done();
      });
    });

});
