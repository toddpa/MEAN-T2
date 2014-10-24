'use strict';

angular.module('mathsApp').controller('ElementsCtrl', ['$scope', '$routeParams', '$log','ElementContent',
	function($scope, routeParams, $log, elements) {
		this.elements = elements.query({
			app: 'PERCENTAGES' // this.app
		}, function(elements) {
			$log.debug(elements);
		});
		$log.info('**> ElementsCtrl');
	}
]);

angular.module('mathsApp').controller('AppNamesCtrl', ['$routeParams', '$log','AppNames',
	function(routeParams, $log, appNames) {
		this.appNames = appNames.query({
		}, function(elements) {
			$log.debug(appNames);
		});
		$log.info('**> AppNamesCtrl');
	}
]);