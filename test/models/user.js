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
    role: 'USER'
  });

  it("saves user to database", function(done) {

    User.addUser(john, function(err, user) {
      if (err) {
        assert.fail(err.message);
      } else {
        assert.equal(john.email, user.email);
        assert.equal(john.password, user.password);
        assert.equal(john.firstName, user.firstName);
        assert.equal(john.lastName, user.lastName);
        assert.equal(john.role, user.role);
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
          assert.equal(john.firstName, user.firstName);
          assert.equal(john.lastName, user.lastName);
          assert.equal(john.role, user.role);
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
          assert.equal(john.firstName, user.firstName);
          assert.equal(john.lastName, user.lastName);
          assert.equal(john.role, user.role);
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
