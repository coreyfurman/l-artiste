const express = require('express');
const router = express.Router();

const db = require("../models");

/* GET home page. */
router.post('/login',
  passport.authenticate('local', 
      { 
        successRedirect: '/',
        failureRedirect: '/login',
        failureFlash: true 
      })
);

module.exports = router;
