angular
  .module('savor.home',['ngMaterial', 'ngMessages', 'material.svgAssetsCache', 'uiGmapgoogle-maps'])
  .controller('homeController', function($scope, $http, uiGmapGoogleMapApi) {
    $scope.showMap = false;
    $scope.profile = JSON.parse(localStorage.getItem('profile'));
    $scope.score = [1,2,3,4,5];
    $scope.getAll = function getAll() {
      $http.get('/api/restaurants').then(function(res) {
        $scope.restaurants = res.data;
        $scope.restaurants.forEach(function(it, i){
          it.span  = { row : 1, col : 2 };
          //if (i === 0 || i === 4 || i === 6 || i === 12) it.span.row = it.span.col = 2;
        });
      });
    };

    $scope.shareOnFB = function (restaurant) {
      FB.ui({
        method: 'share',
        href: restaurant.yelp.url,
      }, function(response){});
    };

    uiGmapGoogleMapApi.then(function(maps) {

      $scope.getAll();
      $scope.$applyAsync(function () {
        $scope.showMap = true;
      });
    });
  });
