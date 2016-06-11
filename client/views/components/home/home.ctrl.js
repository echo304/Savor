angular
  .module('savor.home',['ngMaterial', 'ngMessages', 'material.svgAssetsCache', 'uiGmapgoogle-maps'])
  .controller('homeController', function($scope, $http, uiGmapGoogleMapApi) {

    //refresh function that was an attempt to get just added restaurant to render on page without a refresh
    /*window.refresh = function() {
      $http.get('/api/restaurants').then(function (response) {
        console.log('hello');
        $scope.restaurants = response.data;
      })
    };*/

    // default data of google map
    // $scope.map = {
    //   center: {
    //     latitude: 45,
    //     longitude: -73
    //   },
    //   zoom: 8
    // };

    $scope.profile = JSON.parse(localStorage.getItem('profile'));

    $scope.getAll = function getAll() {
      $http.get('/api/restaurants').then(function(res) {
        $scope.restaurants = res.data;
      });
    }
    // Make sure to wait till Google Maps SDK is fully ready
    uiGmapGoogleMapApi.then(function(maps) {
      $scope.getAll();
    });
  });
