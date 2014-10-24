'use strict';

/**
 * @ngdoc function
 * @name mathsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mathsApp
 */
angular.module('mathsApp')
	.controller('MainCtrl', function($scope) {
		console.log('**> MainCtrl');
		$scope.awesomeThings = [
			'HTML5 Boilerplate',
			'AngularJS',
			'Karma'
		];
	});