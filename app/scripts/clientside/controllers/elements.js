'use strict';

angular.module('mathsApp').controller('ElementsCtrl', ['$scope', '$routeParams', '$log', 'ElementContent',
	function($scope, routeParams, $log, elements) {
		if ($scope.$parent.appName) {
			this.elements = elements.query({
				app: $scope.$parent.appName // this.app
			}, function(elements) {
				$log.debug(elements);
			});
			$log.info('**> ElementsCtrl APP: ' + $scope.$parent.appName);
		}
	}
]);

angular.module('mathsApp').controller('AppNamesCtrl', ['$routeParams', '$log', 'AppNames',
	function(routeParams, $log, appNames) {
		this.appNames = appNames.query({}, function(elements) {
			$log.debug(appNames);
		});
		$log.info('**> AppNamesCtrl');
	}
]);