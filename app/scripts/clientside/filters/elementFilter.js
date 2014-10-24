'use strict';
/* Filters */
/**
 * @ngdoc overview
 * @name elementFilter
 * @description
 * # elementFilter
 *
 * Main module of the application.
 */
angular.module('elementFilter', []).filter('questionName', function() {
  return function(questionName) {
    return questionName.slice(questionName.length-3, questionName.length);
  };
});
