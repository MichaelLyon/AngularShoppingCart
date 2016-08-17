var shoppingCart = angular.module('shoppingCart.controllers', [])

shoppingCart.controller('mainPageController', ['$scope', '$state', 'Items', function($scope, $state, Items) {
  $scope.view = {};
  $scope.Items= Items;
  console.log($scope.Items.all());
  $scope.view.message = "Welcome!"
}])
