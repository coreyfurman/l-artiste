const express = require('express');
const router = express.Router();

const db = require("../models");

/* GET artwork */
router.get('/artwork/:id', function(req, res, next) {
  
  db.Artwork.findOne({
    where: {
      id: req.params.id
    },
    include:{
      model: db.Artist,
      model: db.Rating
    }
  }).then((artwork) =>{
    res.render('artwork', 
      { 
        title: "L'Artiste",
      
        artwork: artwork
      });
  })
  
});

/* POST new artwork */
router.post('/new-art', function(req, res, next){
  
  db.Artwork.findOrCreate({
    where: {
      title: req.body.title,
      category: req.body.category,
      description: req.body.description,
      media: req.body.media,
      rating: 1,
      price: req.body.price,
    }
  })
  .spread((artwork, created) => {

    console.log(created);
    
    res.redirect(`/artwork/${artwork.id}`);
  })

})

module.exports = router;
