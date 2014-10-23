'use strict';

/* Services */

var elementContentService = angular.module('elementContentService', ['ngResource']);

elementContentService.factory('ElementContent', ['$resource',
function($resource) {
	return $resource('/elements/:app', {}, {
			isArray: true
		}
	});
}]);