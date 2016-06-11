var restaurantController = require('./../db/controllers');
var Uber = require('node-uber');
var uber = new Uber({
    client_id: 'cNjHPzCrLKp-e_-6JmJO1euwEAKmrRLG',
    client_secret: 'GtZk938iQePE-yTSeVd68QV5H0VAFDfgBvBLQ9xH',
    server_token: 'X2n1UZirsXcwQqJEupph4Xm3LodTJl7LXU4ajDFZ',
    redirect_uri: '',
    name: 'SavorApp',
    language: 'en_US', // optional, defaults to en_US
    sandbox: true // optional, defaults to false
});

module.exports = {

    // send Oauth request to Uber
    loginUberUser: function(req, res) {
        var login_url = uber.getAuthorizeUrl(['history', 'profile', 'request', 'places']);
        res.redirect(login_url);
    },

    // handle oauth token received
    handleUberAuthorization: function(req, res, next) {
        uber.authorization({
            authorization_code: req.query.code
        }, function(err, access_token, refresh_token) {
            if (err) {
                console.error(err);
            } else {
               // with access token! 
               var accessToken = access_token;
               debugger; 
                // store the user id and associated access token
                // redirect the user back to your actual app
                response.redirect('/');
            }
        });
    },

    //function not being used
        getRestaurantsByUser: function(req, res) {
        var id = req.params._id;
        restaurantController.fetchAllById(id, function(restaurant) {
            res.status(200).json(restaurant);
        })
    },

    getRestaurants: function(req, res) {
        restaurantController.fetchAll(function(restaurants) {
            res.status(200).json(restaurants);
        });
    },
    //function not being used
    getOneRestaurant: function(req, res) {
        var id = req.params._id;
        restaurantController.fetchOne(id, function(restaurant) {
            res.status(200).json(restaurant);
        })
    },

    addRestaurant: function(req, res) {
        console.log("req.body: ", req.body);
        var restaurant = req.body;
        restaurantController.addRestaurantReview(restaurant, function(newRestaurant) {
            res.status(201).json(newRestaurant);
        })
    },
    //function not being used
    updateRestaurantInfo: function(req, res) {
        //_.id
        var id = req.params._id;
        var newProperties = req.body;
        restaurantController.updateOne(id, newProperties, function(updatedRestaurant) {
            res.status(200).json(updatedRestaurant);
        })
    },
    //function not being used
    deleteRestaurant: function(req, res) {
        var id = req.params._id;
        restaurantController.deleteOne(id, function(deleted) {
            res.status(200).json(deleted);
        })
    }
};
