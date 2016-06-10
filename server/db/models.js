var mongoose = require('mongoose');

var config = require(__dirname + '/../config.js');

var Yelp = require('yelp');

var restSchema = new mongoose.Schema({
    restaurantName: String,
    restaurantAddress: String,
    priceRating: String,
    serviceRating: Number,
    foodRating: Number,
    ambienceRating: Number,
    restaurantReview: String,
    userEmail: String,
    image: String,
    yelp: Object
});

// add Yelp info to new restaurant doc prior to saving to DB
  // LOL no es6 allowed, this binding will get fucked up. 
restSchema.pre('save', function(next){
  debugger; 
    var restaurant = this;

    if (!restaurant.isNew) {
        return next();
    }

    var yelpConfig = config.api.yelp;
    var yelp = new Yelp({
        consumer_key: yelpConfig.consumer_key,
        consumer_secret: yelpConfig.consumer_secret,
        token: yelpConfig.token,
        token_secret: yelpConfig.token_secret,
    });

    // assumes location is passed as query string param. Hardcoded limit of 1. 
    yelp.search({ term: restaurant.restaurantName, location: restaurant.restaurantAddress, limit: 1 })
        .then(function(data) {
            var results = data.businesses; 
            if (results.length){
              restaurant.yelp = results[0]; 
            }
            next(); 
            // what if no matching businesses? do values need to be set to default? 
        })
        .catch(function(err) {
            console.error(err);
        });

});
//Export a Restaurant model to be used in the controllers file.
module.exports = mongoose.model("Restaurant", restSchema);
