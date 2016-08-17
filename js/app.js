angular.module('shoppingCart', ['shoppingCart.controllers', 'shoppingCart.filters','shoppingCart.services', 'ngRoute',
	'ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/', {
    templateUrl: 'index.html',
    controller: 'mainPageController',
    controllerAs: 'mainCtrl'
  }) 
	$stateProvider
		// .state('cart', {
		// 	url: '/cart',
		// 	templateUrl: 'cart.html',
		// 	controller: 'mainPageController',
		// 	controllerAs: 'mainCtrl'
		// })
}])
