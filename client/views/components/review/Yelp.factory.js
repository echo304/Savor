'use strict'

foodApp.factory('Yelp', function($resource) {
  // may need to add empty options objects? 
  return $resource('/extapi/yelp/');
});