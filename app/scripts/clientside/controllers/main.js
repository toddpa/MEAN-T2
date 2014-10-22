'use strict';

/**
 * @ngdoc function
 * @name angularSeedApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularSeedApp
 */
angular.module('angularSeedApp')
	.controller('MainCtrl', function($scope) {
		console.log('**> MainCtrl');
		$scope.awesomeThings = [
			'HTML5 Boilerplate',
			'AngularJS',
			'Karma'
		];
	});