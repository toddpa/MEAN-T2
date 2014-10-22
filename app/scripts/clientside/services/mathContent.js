'use strict';

/* Services */

var mathContentService = angular.module('mathContentService', ['ngResource']);

mathContentService.factory('MathContent', ['$resource',
  function($resource){
    return $resource('/maths/:app/:element/:question/:form', {}, {
      percentages: {method:'GET', params:{app:'PERCENTAGES', element: 'FRACTIONS_APP_PREVIEW_PERCENTAGE'}, isArray:true}
    });
  }]);
