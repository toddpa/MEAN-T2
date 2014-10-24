'use strict';

// Controller for the MULTIPLE element(s)
angular.module('mathsApp').controller('ElementsCtrl', ['$scope', '$routeParams', '$log', 'ElementsContent',
	function($scope, routeParams, $log, elements) {
		if ($scope.$parent.appName) {
			this.elements = elements.query({
				app: $scope.$parent.appName // this.app
			}, function(elements) {
				$log.debug(elements);
			});
			$log.debug('**> ElementsCtrl APP: ' + $scope.$parent.appName);
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
			$log.debug('**> ElementsCtrl APP: ' + $scope.$parent.appName);
	}
]);

