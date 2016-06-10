var express = require('express');
var router = express.Router();
var config = require(__dirname + '/../config.js');

router.get('/', (req, res, next) => {
    var Yelp = require('yelp');
    var yelpConfig = config.api.yelp;

    var yelp = new Yelp({
        consumer_key: yelpConfig.consumer_key,
        consumer_secret: yelpConfig.consumer_secret,
        token: yelpConfig.token,
        token_secret: yelpConfig.token_secret,
    });

    yelp.search({ term: 'food', location: 'San Francisco' })
        .then(function(data) {
          res.status(200).json(data); 
        })
        .catch(function(err) {
            console.error(err);
            res.status(404).send(err);  
        });

});

module.exports = router;
