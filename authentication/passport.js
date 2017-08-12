// Passport Authentication
const passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

const db = require("../models");

module.exports = function(app){
  
  app.use(express.session({ secret: 'keyboard cat' }));
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(app.router);

  passport.use(new LocalStrategy(
    function(username, password, done) {
      db.User.findOne({ username: username }, function(err, user) {
        if (err) { return done(err); }
        if (!user) {
          return done(null, false, { message: 'Incorrect username.' });
        }
        if (!user.validPassword(password)) {
          return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user);
      });
    }
  ));
}

