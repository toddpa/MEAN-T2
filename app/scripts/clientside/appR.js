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
    'ui.router',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'elementContentService',
    'questionContentService',
    'elementFilter'
  ]).config(function($stateProvider){
    $stateProvider
        .state('subject', {
            url: "/",
            views: {
                "main": {
                  templateUrl: 'views/subjectsR.html',
                  controller: 'ElementsCtrl',
                  controllerAs: 'elementsCtrl'
                },
            }
        })
        .state('elements', {
            url: '/:app/:element',
            views: {
                "main": {
                  templateUrl: 'views/elements.html',
                  controller: 'ElementCtrl',
                  controllerAs: 'elementCtrl'
                }
            }
        })
        .state('element', {
            url: '/:app/:element/:name',
            views: {
                "main": {
                  templateUrl: 'views/question.html',
                  controller: 'QuestionCtrl',
                  controllerAs: 'questionCtrl'
                }
            }
        })
    });