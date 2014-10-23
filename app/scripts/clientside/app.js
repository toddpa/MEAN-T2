'use strict';

/**
 * @ngdoc overview
 * @name angularSeedApp
 * @description
 * # angularSeedApp
 *
 * Main module of the application.
 */
var theAppModule = angular
  .module('angularSeedApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'mathContentService',
    'elementFilter'
  ])
  .config(function($routeProvider) {
    console.log('**> LOADING angularSeedApp');

    $routeProvider
      .when('/', {
        templateUrl: 'views/elements.html',
        controller: 'ElementsCtrl'
      })
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/subjects', {
        templateUrl: 'views/subjects.html',
        controller: 'ElementsCtrl'
      })
      .when('/:app/:element/:name', {
        templateUrl: 'views/question.html',
        controller: 'QuestionCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });