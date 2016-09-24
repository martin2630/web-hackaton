angular.module('homeService', [])
.factory('Home', function($http) {
	
	var homeFactory = {};

	// Replicate $http request returning JSON
	homeFactory.all = function() {

		return $http.get('./modules/list/services/list.json');

	};

	return homeFactory;

});