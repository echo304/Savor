angular
  .module('savor.home',['ngMaterial', 'ngMessages', 'material.svgAssetsCache', 'uiGmapgoogle-maps'])
  .controller('homeController', function($scope, $http, uiGmapGoogleMapApi) {

    $scope.profile = JSON.parse(localStorage.getItem('profile'));

    $scope.getAll = function getAll() {
      $http.get('/api/restaurants').then(function(res) {
        $scope.restaurants = res.data;
        $scope.restaurants.forEach(function(it, i){
          it.span  = { row : 1, col : 2 };
          //if (i === 0 || i === 4 || i === 6 || i === 12) it.span.row = it.span.col = 2;
        });
      });
<<<<<<< f4fe99b0751b8ba788fed3980285c88198a7dbf6
    };

    uiGmapGoogleMapApi.then(function(maps) {
      $scope.getAll();
    });
  });
=======
    }
    // Make sure to wait till Google Maps SDK is fully ready
    uiGmapGoogleMapApi.then(function(maps) {
      getAll();
    });
  });
>>>>>>> Added review tiles to user page
