//necessary to use underscore
var underscore = angular.module('underscore', []);
underscore.factory('_', function() {
  //Underscore must already be loaded on the page
  return window._; 
});

angular
  .module('savor.home',['ngMaterial', 'ngMessages', 'material.svgAssetsCache', 'ui.router'])
  .controller('homeController', function($scope, $http, _, $location, $state) {
    //refresh function that was an attempt to get just added restaurant to render on page without a refresh
    /*window.refresh = function() {
      $http.get('/api/restaurants').then(function (response) {
        console.log('hello');
        $scope.restaurants = response.data;
      })
    };*/

    $scope.profile = JSON.parse(localStorage.getItem('profile'));

    // assume restaurants info populates to scope vars before anyone clicks button. 
    // prob should add after scope.restaurants=res.data (async op)
    $scope.orderUber = function(){
      alert('CHANGE THIS LINE 24 HOME.CTRL.JS to REDIRECT or DISPLAY FORM for logging in to UBER?'); 
      $state.go('/test'); 
      // $location.path('/test'); 

    }
    
    function getAll() {
      $http.get('/api/restaurants').then(function(res) {
        $scope.restaurants = res.data;
      });
    }
    getAll();
  });
  