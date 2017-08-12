const express = require('express');
const router = express.Router();

const db = require("../models");

/* GET home page. */
router.post('/signup', function(req, res, next) {
  
  // if sign up type is artist
  // create new artist account
  if(req.body.userType === 'artist'){
    
    db.Artist.findOrCreate({
      where: {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      }
    })
    .spread((artist, created) => {

      console.log(created);
      
      res.redirect(`/artwork/${artist.id}`);
    })
    
  }
  // else create new normal user account
  else{
    
    db.User.findOrCreate({
      where: {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      }
    })
    .spread((user, created) => {

      console.log(created)
      
      res.redirect(`/`)
    })
  }
  
  
  
});

module.exports = router;
