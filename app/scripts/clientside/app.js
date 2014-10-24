'use strict';

/**
 * @ngdoc overview
 * @name mathsApp
 * @description
 * # mathsApp
 *
 * Main module of the application.
 */
var theAppModule = angular
  .module('mathsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'elementContentService',
    'questionContentService',
    'elementFilter'
  ])
  .config(['$routeProvider', '$logProvider',
    function($routeProvider, $logProvider) {
      $logProvider.debugEnabled(true);

      $routeProvider
        .when('/', {
          templateUrl: 'views/elements.html',
          controller: 'ElementsCtrl'
        })
        .when('/:app/:element/:name', {
          templateUrl: 'views/question.html',
          controller: 'QuestionCtrl'
        })
        .otherwise({
          redirectTo: '/'
        });
    }
  ]);