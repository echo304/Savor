var mongoose = require('mongoose');

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
  yelp: {
    id: String,
    name: String,
    image_url: String,
    rating: Number
    // rating_img_url: String,
    // rating_img_url_small: String,
    // rating_img_url_large: String
    // can add location data too: 
    // see: https://www.yelp.com.au/developers/documentation/v2/search_api
  } 
 });

//Export a Restaurant model to be used in the controllers file.
module.exports = mongoose.model("Restaurant", restSchema);
