var express = require('express');
var router = express.Router();
var config = require(__dirname + '/../config.js');
// var Fuse = require('fuse.js'); 

router.get('/', (req, res, next) => {
    // UNDID ALL
    next(); 
    // var Yelp = require('yelp');
    // var yelpConfig = config.api.yelp;

    // var yelp = new Yelp({
    //     consumer_key: yelpConfig.consumer_key,
    //     consumer_secret: yelpConfig.consumer_secret,
    //     token: yelpConfig.token,
    //     token_secret: yelpConfig.token_secret,
    // });

    // // assumes location is passed as query string param. Hardcoded limit of 1. 
    // yelp.search({ term: req.query.term, location: req.query.location, limit:1 })
    //     .then(function(data) {
    //         // if no match, data.businesses will be an empty array.  
    //         res.status(200).json(data.businesses);
    //     })
    //     .catch(function(err) {
    //         console.error(err);
    //         res.status(404).send(err);  
    //     });

});

module.exports = router;
