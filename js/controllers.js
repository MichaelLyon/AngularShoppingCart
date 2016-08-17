var shoppingCart = angular.module('shoppingCart.controllers', [])

shoppingCart.controller('mainPageController', ['$scope', '$state', function($scope, $state) {
  $scope.view = {};
  $scope.view.message = "Welcome!"
}])

.controller('homeController', ['$http', '$rootScope', '$state', function($http, $rootScope, $state) {

}])
