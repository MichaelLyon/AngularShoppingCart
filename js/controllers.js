var shoppingCart = angular.module('shoppingCart.controllers', [])

shoppingCart.controller('mainPageController', ['$scope', '$state', 'Items', 'checkInStockFilter', 'addDecimalFilter',
	function($scope, $state, Items, checkInStockFilter, addDecimalFilter) {

		$scope.view = {};
		$scope.Items = Items;
		$scope.checkInStockFilter = checkInStockFilter;
		$scope.addDecimalFilter = addDecimalFilter;
		$scope.view.allItems = Items.all();
		$scope.view.allCategories = Items.getCategories();

    $scope.view.allItems.forEach(function(ele){
      ele.quantity = 1;
    })

    //Option Selector
    $scope.view.optionValues = Items.countOption();

    $scope.addToBag = function(tea, quantity) {
      tea.quantity += Number(quantity);
      tea.subtotal = (Number(quantity) * (tea.price))
      Items.createCheckoutObject(tea);

      console.log(tea);
      console.log(quantity);

		}

    console.log($scope.view.allItems);

	}
])

shoppingCart.controller('checkoutPageController', ['$scope', '$state', 'Items', 'checkInStockFilter', 'addDecimalFilter',
	function($scope, $state, Items, checkInStockFilter, addDecimalFilter) {

		$scope.view = {};
    $scope.view.teas = Items.createCheckoutObject();
    $scope.addDecimalFilter = addDecimalFilter;
    $scope.view.allSubtotal = Items.createSubtotal($scope.view.teas);
    $scope.view.editBool = false;

    $scope.removeItem = function (tea) {
      Items.removeItemFromCheckout(tea);
    }
    $scope.editItemQuantity = function(tea, newQuantity){
      $scope.view.editBool = false;
      tea.quantity = newQuantity;
      tea.subtotal = (Number(newQuantity) * (tea.price))
      $scope.view.allSubtotal = Items.createSubtotal($scope.view.teas);
      Items.createCheckoutObject(tea);
      console.log(newQuantity);
      console.log(tea);


    }
	}
])
