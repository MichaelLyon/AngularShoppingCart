var shoppingCart = angular.module('shoppingCart.controllers', [])

shoppingCart.controller('mainPageController', ['$scope', function($scope) {
  $scope.view = {};
  $scope.view.message = "Welcome!"
}])

.controller('homeController', ['$http', '$rootScope', '$state', function($http, $rootScope, $state) {

}])
