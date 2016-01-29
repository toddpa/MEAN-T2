'use strict';

// Controller for the MULTIPLE element(s)
/*
 ElementsContent, AppNames, ElementContent are referneces to the [Services]
 */

angular.module('mathsApp').controller('AppNamesCtrl', ['$state', '$log', 'AppNames',
	function(state, $log, appNames) {
		this.appNames = appNames.query({}, function(elements) {
			$log.debug(appNames);
		});
		$log.debug('**> AppNamesCtrl');
	}
]);



angular.module('mathsApp').controller('ElementsCtrl', ['$scope', '$state', '$log', 'ElementsContent',
	function($scope, state, $log, elements) {
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

// Controller for a SINGLE element
angular.module('mathsApp').controller('ElementCtrl', ['$scope', '$stateParams', '$state', '$log', 'ElementContent',
	function($scope, stateParams, state, $log, element) {
			this.element = element.get({
				app: state.app,
				element: state.element
			}, function(element) {
				$log.debug(element);
			});
			$log.debug('**> ElementCtrl APP: ' + state.app);
	}
]);

