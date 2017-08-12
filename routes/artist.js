const express = require('express');
const router = express.Router();

const db = require("../models");

/* GET artist */
router.get('/artists/:name', function(req, res, next) {
  
  db.Artist.findOne({
    where: {
      name: req.params.name
    },
    include:{
      model: db.Artwork
    }
  }).then((artist) =>{
    
//    db.Artwork.findAll({
//      where: {
//        id: artist.id
//      },
//      include:{
//        model: db.Rating
//      }
//    }.then(() => {})
    
    res.render('artist', 
      {
        title: "L'Artiste",
      
        artist: artist
      });
  });
  
});

module.exports = router;
