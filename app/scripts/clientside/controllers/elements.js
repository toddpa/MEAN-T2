'use strict';

angular.module('angularSeedApp').controller('ElementsCtrl', ['$routeParams', 'MathContent',
	function(routeParams, content) {
		this.elements = content.percentages();
		console.log(this.elements);
	}
]);