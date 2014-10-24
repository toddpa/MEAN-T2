'use strict';
/* Services */

/**
 * @ngdoc overview
 * @name elementContentService
 * @description
 * # elementContentService
 *
 * Filter.
 */

var elementContentService = angular.module('elementContentService', ['ngResource']);

// Fetch the list of elements contained within this App
elementContentService.factory('ElementsContent', ['$resource',
	function($resource) {
		return $resource('/elements/:app');
	}
]);

// Fetch the distinct list of Apps
elementContentService.factory('AppNames', ['$resource',
	function($resource) {
		return $resource('/elements/apps/distinct');
	}
]);


// Fetch the record for this App:Element path
elementContentService.factory('ElementContent', ['$resource',
	function($resource) {
		return $resource('/element/:app/:element');
	}
]);

