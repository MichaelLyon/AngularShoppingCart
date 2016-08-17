angular.module('shoppingCart', ['shoppingCart.controllers', 'shoppingCart.filters','shoppingCart.services',
 'ngRoute','ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/')
	$stateProvider
		.state('main', {
			url: '/main',
			templateUrl: '../paritals/mainPage.html',
			controller: 'mainPageController',
			controllerAs: 'mainCtrl'
		})

}])
