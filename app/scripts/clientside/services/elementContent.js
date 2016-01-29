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
elementContentService.factory('ElementsContent', ['$resource', '$log',
	function($resource, $log) {
		// Call the server and return some JSON records as identified
		$log.info('Retrieve list of Element records')
		return $resource('/elements/:app');
	}
]);

// Fetch the distinct list of Apps
elementContentService.factory('AppNames', ['$resource','$log',
	function($resource, $log) {
		// Call the server and return some JSON records as identified
		$log.info('Retrieve list of App records')
		return $resource('/elements/apps/distinct');
	}
]);


// Fetch the record for this App:Element path
elementContentService.factory('ElementContent', ['$resource','$log',
	function($resource, $log) {
		// Call the server and return some JSON records as identified
		$log.info('Retrieve App:Element record')
		return $resource('/element/:app/:element');
	}
]);

