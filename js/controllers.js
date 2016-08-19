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
      ele.quantity = 0;
    })

    //Option Selector
    $scope.view.optionValues = Items.countOption();

    $scope.addToBag = function(tea, quantity) {
      tea.quantity += Number(quantity);
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

	}
])
