angular.module('homeCtrl', ['homeService'])
.controller('homeCtrl', function(Home) {
	
	self = this;

	// Grab all the items from List Service
	Home.all()
    .success(function(data) {
        self.listItems = data;
    })
    .error(function(data) {
        // Error Handling
    });

});