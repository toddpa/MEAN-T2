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

elementContentService.factory('ElementContent', ['$resource',
	function($resource) {
		return $resource('/elements/:app');
	}
]);

elementContentService.factory('AppNames', ['$resource',
	function($resource) {
		return $resource('/elements/apps/distinct');
	}
]);