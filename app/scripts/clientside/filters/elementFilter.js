'use strict';

/* Filters */

angular.module('elementFilter', []).filter('questionName', function() {
  return function(questionName) {
    return questionName.slice(questionName.length-3, questionName.length);
  };
});
