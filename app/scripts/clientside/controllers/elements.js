'use strict';

angular.module('mathsApp').controller('ElementsCtrl', ['$routeParams', '$log','ElementContent',
	function(routeParams, $log, elements) {
		this.elements = elements.query({
			app: 'PERCENTAGES' // this.app
		}, function(elements) {
			$log.debug(elements);
		});
		$log.info('**> ElementsCtrl');
	}
]);