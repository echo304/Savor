var express = require('express');
var router = express.Router();
var config = require(__dirname + '/../config.js');
var Fuse = require('fuse.js'); 

router.get('/', (req, res, next) => {
    var Yelp = require('yelp');
    var yelpConfig = config.api.yelp;

    var yelp = new Yelp({
        consumer_key: yelpConfig.consumer_key,
        consumer_secret: yelpConfig.consumer_secret,
        token: yelpConfig.token,
        token_secret: yelpConfig.token_secret,
    });

    // assumes location is passed as query string param. Can check if
    // location is an optional term. 
    yelp.search({ term: req.query.term, location: req.query.location, limit:10 })
        .then(function(data) {
          const initialResults = data.businesses[0]; 
          // CHANGED
          // assumes yelp does good location limiting, else can add as key
          // const options = {
          //     caseSensitive: false,
          //     includeScore: false,
          //     shouldSort: true,
          //     tokenize: false,
          //     threshold: 0.6,
          //     location: 0,
          //     distance: 100,
          //     maxPatternLength: 32,
          //     keys: ["name"]
          //   };
          //   debugger;  
          // const fused = new Fuse(initialResults, options);
          // const finalResult = fused.search(req.query.term)
          // if (finalResult.length){
          //   res.status(200).json(finalResult[0]); 
          // }
          // B TEST
          res.status(200).json(initialResults); 
        })
        .catch(function(err) {
            console.error(err);
            res.status(404).send(err);  
        });

});

module.exports = router;
