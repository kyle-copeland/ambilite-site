var app = angular.module('myApp',['ngRoute','ui.bootstrap']);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		when('/Home', {
			templateUrl: "partials/home.html",
			controller: "homeCtrl"
		}).
		when('/About', {
			templateUrl: "partials/about.html"
		}).
		when('/Specifications', {
			templateUrl: "partials/specifications.html"
		}).
		otherwise({
			redirectTo: '/Home'
		});
}]);