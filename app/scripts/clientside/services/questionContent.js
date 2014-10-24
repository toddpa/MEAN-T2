'use strict';

/* Services */
/**
 * @ngdoc overview
 * @name questionContentService
 * @description
 * # questionContentService
 *
 * Filter.
 */

var questionContentService = angular.module('questionContentService', ['ngResource']);

questionContentService.factory('QuestionContent', ['$resource',
	function($resource) {
		return $resource('/questions/:app/:element/:question/:form');
	}
]);