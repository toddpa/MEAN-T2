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

questionContentService.factory('QuestionContent', ['$resource', '$log',
	function($resource, $log) {
		$log.info('questionContentService')
		return $resource('/questions/:app/:element/:question/:form');
	}
]);