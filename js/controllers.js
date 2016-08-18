var shoppingCart = angular.module('shoppingCart.controllers', [])

shoppingCart.controller('mainPageController', ['$scope', '$state', 'Items', 'checkInStockFilter',
 'addDecimalFilter', function($scope, $state, Items, checkInStockFilter, addDecimalFilter) {

  $scope.view = {};
  $scope.Items= Items;
  $scope.checkInStockFilter = checkInStockFilter;
  $scope.addDecimalFilter = addDecimalFilter;
  $scope.view.allItems = Items.all();
  $scope.categoryArray = [];
  for (var i = 0; i < $scope.view.allItems.length; i++) {
    for (var item in $scope.view.allItems[i].categories) {
      for (var i = 0; i < $scope.categoryArray.length; i++) {
        if($scope.view.allItems[i].categories[item] === $scope.categoryArray[i]){
          // continue
        }else{
          $scope.categoryArray.push($scope.view.allItems[i].categories[item]);
        }
      }
      // $scope.categoryArray.push($scope.view.allItems[i].categories[item]);
    }
  }

  console.log($scope.categoryArray);
  console.log($scope.view.allItems);
}])
