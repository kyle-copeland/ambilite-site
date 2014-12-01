app.controller('navCtrl', function($scope,$location) {
	$scope.panels = ['Home','About','Specifications']
	
	
	$scope.isActive = function(path) {
		return path === $location.path();
	}	
});