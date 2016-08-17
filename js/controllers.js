var shoppingCart = angular.module('shoppingCart.controllers', [])

shoppingCart.controller('mainPageController', ['$scope', '$state', 'Items', function($scope, $state, Items) {
  $scope.view = {};
  // $scope.Items= Items;
  $scope.view.allItems = Items.all();
  console.log($scope.view.allItems);
  $scope.view.message = "Welcome!"
}])
