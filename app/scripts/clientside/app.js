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
    'ui.bootstrap',
    'elementContentService',
    'questionContentService',
    'elementFilter'
  ]) .config(['$routeProvider', '$logProvider',
    function($routeProvider, $logProvider) {
      $logProvider.debugEnabled(true);

      $routeProvider
        .when('/', {
          templateUrl: 'views/subjects.html', // Route for the 1st view
          controller: 'ElementsCtrl'
        })
        .when('/:app/:element', {
          templateUrl: 'views/elements.html', // Set the ng-view to views:elements.html
          controller: 'ElementCtrl'
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