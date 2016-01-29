'use strict';

// Controller for the MULTIPLE element(s)
/*
 ElementsContent, AppNames, ElementContent are referneces to the [Services]
 */

angular.module('mathsApp').controller('ElementsCtrl', ['$scope', '$routeParams', '$log', 'ElementsContent',
	function($scope, routeParams, $log, elements) {
		if ($scope.$parent.appName) {
			$log.debug('**> ElementsCtrl APP: ' + $scope.$parent.appName);
			this.elements = elements.query({
				app: $scope.$parent.appName // this.app
			}, function(elements) {
				// $log.debug('AppName: ' + $scope.$parent.appName);
				$log.debug(elements);
			});
		}
	}
]);

angular.module('mathsApp').controller('AppNamesCtrl', ['$routeParams', '$log', 'AppNames',
	function(routeParams, $log, appNames) {
		this.appNames = appNames.query({}, function(elements) {
			$log.debug(appNames);
		});
		$log.debug('**> AppNamesCtrl');
	}
]);

// Controller for a SINGLE element
angular.module('mathsApp').controller('ElementCtrl', ['$scope', '$routeParams', '$log', 'ElementContent',
	function($scope, routeParams, $log, element) {
			this.element = element.get({
				app: routeParams.app,
				element: routeParams.element
			}, function(element) {
				$log.debug(element);
			});
			$log.debug('**> ElementCtrl APP: ' + routeParams.app);
	}
]);

angular
  .module('sidenavDemo1', ['ngMaterial'])
  .controller('AppCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.toggleLeft = buildDelayedToggler('left');
    $scope.toggleRight = buildToggler('right');
    $scope.isOpenRight = function(){
      return $mdSidenav('right').isOpen();
    };
    /**
     * Supplies a function that will continue to operate until the
     * time is up.
     */
    function debounce(func, wait, context) {
      var timer;
      return function debounced() {
        var context = $scope,
            args = Array.prototype.slice.call(arguments);
        $timeout.cancel(timer);
        timer = $timeout(function() {
          timer = undefined;
          func.apply(context, args);
        }, wait || 10);
      };
    }
    /**
     * Build handler to open/close a SideNav; when animation finishes
     * report completion in console
     */
    function buildDelayedToggler(navID) {
      return debounce(function() {
        $mdSidenav(navID)
          .toggle()
          .then(function () {
            $log.debug("toggle " + navID + " is done");
          });
      }, 200);
    }
    function buildToggler(navID) {
      return function() {
        $mdSidenav(navID)
          .toggle()
          .then(function () {
            $log.debug("toggle " + navID + " is done");
          });
      }
    }
  })
  .controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
      $mdSidenav('left').close()
        .then(function () {
          $log.debug("close LEFT is done");
        });
    };
  })
  .controller('RightCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
      $mdSidenav('right').close()
        .then(function () {
          $log.debug("close RIGHT is done");
        });
    };
  });