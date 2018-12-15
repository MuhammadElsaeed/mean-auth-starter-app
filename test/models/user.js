const assert = require('chai').assert;

const User = require('../../models/user');

const UUID = require('uuid');
describe("user", function() {
  const uuid = UUID();
  let john = new User({
    firstName: uuid,
    lastName: uuid,
    email: uuid + "@example.com",
    password: uuid,
    username: uuid
  });

  it("saves user to database", function(done) {

    User.addUser(john, function(err, user) {
      if (err) {
        assert.fail(err.message);
      } else {
        assert.equal(john.email, user.email);
        assert.equal(john.password, user.password);
        assert.equal(john.username, user.username);
        assert.equal(john.firstName, user.firstName);
        assert.equal(john.lastName, user.lastName);

      }
      done();
    });
  });

  it("gets user by username",
    function(done) {
      User.getUserByUsername(john.username, (err, user) => {
        if (err) {
          assert.fail(err.message);
        } else {
          assert.equal(john.email, user.email);
          assert.equal(john.password, user.password);
          assert.equal(john.username, user.username);
          assert.equal(john.firstName, user.firstName);
          assert.equal(john.lastName, user.lastName);
        }
        done();
      });
    });

  it("gets user by email",
    function(done) {
      User.getUserByEmail(john.email, (err, user) => {
        if (err) {
          assert.fail(err.message);
        } else {
          assert.equal(john.email, user.email);
          assert.equal(john.password, user.password);
          assert.equal(john.username, user.username);
          assert.equal(john.firstName, user.firstName);
          assert.equal(john.lastName, user.lastName);
        }
        done();
      });
    });

  it("gets user by id",
    function(done) {
      User.getUserById(john.id, (err, user) => {
        if (err) {
          assert.fail(err.message);
        } else {
          assert.equal(john.email, user.email);
          assert.equal(john.password, user.password);
          assert.equal(john.username, user.username);
          assert.equal(john.firstName, user.firstName);
          assert.equal(john.lastName, user.lastName);
        }
        done();
      });
    });


  it("deletes user by id",
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
