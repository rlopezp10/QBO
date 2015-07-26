'use strict';

var app = angular.module('appName', []);

app.controller('firstContoller', ['$scope', '$http', function(scopeName, httpName) {
	scopeName.mainArray = [2, 4, 8, 12, 16, 20];

	
}]);