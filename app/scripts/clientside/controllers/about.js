'use strict';

/**
 * @ngdoc function
 * @name angularSeedApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularSeedApp
 */
angular.module('angularSeedApp')
	.controller('AboutCtrl', function($scope) {
		console.log('**> AboutCtrl');
		$scope.awesomeThings = [
			'HTML5 Boilerplate',
			'AngularJS',
			'Karma'
		];
	});