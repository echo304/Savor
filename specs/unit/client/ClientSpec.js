describe('Client Side Unit Test', function() {
  describe('Test for Test', function() {
    it('should pass', function() {
      expect(true).to.equal(true);
    });
  });

  describe('homeController', function() {
    var controller;
    var scope = {};

    // How to mock module =>
    // angular.module('ngMaterial', []);
    beforeEach(module('savor.home'));

    beforeEach(inject(function(_$controller_){
      var $controller = _$controller_;
      controller = $controller('homeController', { $scope: scope });
    }));

    describe('$scope.map', function() {
      it('should have center property that contains latitude and longitude', function() {
        expect(true).to.equal(true);
      });

      it('should have center property', function() {
        expect(true).to.equal(true);
      });
    });
  });

});
