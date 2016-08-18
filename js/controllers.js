var shoppingCart = angular.module('shoppingCart.controllers', [])

shoppingCart.controller('mainPageController', ['$scope', '$state', 'Items', 'checkInStockFilter', 'addDecimalFilter',
	function($scope, $state, Items, checkInStockFilter, addDecimalFilter) {

		$scope.view = {};
		$scope.Items = Items;
		$scope.checkInStockFilter = checkInStockFilter;
		$scope.addDecimalFilter = addDecimalFilter;
		$scope.view.allItems = Items.all();
		$scope.view.allCategories = Items.getCategories();

		$scope.addToBag = function(tea) {
      console.log('Checkout Controller');
      console.log(Items.pushObjToCart(Items.storeItems(tea,1)));

		}
		console.log($scope.view.allItems);
	}
])

shoppingCart.controller('checkoutPageController', ['$scope', '$state', 'Items', 'checkInStockFilter', 'addDecimalFilter',
	function($scope, $state, Items, checkInStockFilter, addDecimalFilter) {

		$scope.view = {};

	}
])
