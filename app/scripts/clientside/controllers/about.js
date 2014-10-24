'use strict';

/**
 * @ngdoc function
 * @name angularSeedApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the MathsApp
 */
angular.module('mathsApp')
	.controller('AboutCtrl', function($scope) {
		console.log('**> AboutCtrl');
		$scope.awesomeThings = [
			'HTML5 Boilerplate',
			'AngularJS',
			'Karma'
		];
	});