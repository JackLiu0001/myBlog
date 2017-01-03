var siteRouter = angular.module('app', ['ui.router']);

siteRouter.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$stateProvider.state('header', {
		url: '/header',
		templateUrl: './header.html'
	});
}]);
