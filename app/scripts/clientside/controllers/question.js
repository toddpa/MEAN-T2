'use strict';

/**
 * @ngdoc function
 * @name mathsApp.controller:QuestionCtrl
 * @description
 * # QuestionCtrl
 * Controller of the mathsApp
 */
angular.module('mathsApp')
	.controller('QuestionCtrl', ['$routeParams', '$log','QuestionContent',
		function(routeParams, $log, questionBatch) {

		this.questionBatch = questionBatch.get({
			app: routeParams.app,
			element: routeParams.element,
			question: routeParams.name,
			form: 'full'
		}, function(questionBatch) {
			$log.debug(questionBatch);
		});
		$log.info('**> QuestionCtrl' + JSON.stringify(routeParams));

		$("#LAS-question-content").css("visibility", "visible");
		$("#LAS-functions").css("visibility", "visible");

		/* LUCYASTAR CODE ==> */
		/*
		selectableBatch = jQuery.parseJSON('{"valueset":[{"values":[{"slex":null,"frcex":{"type":"frcex","whole":0.0,"dom":45.0,"num":15.0,"decAns":0.3333333333333333,"check":"false"},"frcdgm":null},{"slex":null,"frcex":{"type":"frcex","whole":0.0,"dom":60.0,"num":20.0,"decAns":0.3333333333333333,"check":"false"},"frcdgm":null},{"slex":null,"frcex":{"type":"frcex","whole":0.0,"dom":15.0,"num":6.0,"decAns":0.4,"check":"false"},"frcdgm":null},{"slex":null,"frcex":{"type":"frcex","whole":0.0,"dom":24.0,"num":10.0,"decAns":0.4166666666666667,"check":"false"},"frcdgm":null},{"slex":null,"frcex":{"type":"frcex","whole":0.0,"dom":54.0,"num":15.0,"decAns":0.2777777777777778,"check":"false"},"frcdgm":null},{"slex":null,"frcex":{"type":"frcex","whole":0.0,"dom":39.0,"num":13.0,"decAns":0.3333333333333333,"check":"false"},"frcdgm":null},{"slex":null,"frcex":{"type":"frcex","whole":0.0,"dom":90.0,"num":24.0,"decAns":0.26666666666666666,"check":"true"},"frcdgm":null},{"slex":null,"frcex":{"type":"frcex","whole":0.0,"dom":75.0,"num":20.0,"decAns":0.26666666666666666,"check":"true"},"frcdgm":null},{"slex":null,"frcex":{"type":"frcex","whole":0.0,"dom":100.0,"num":25.0,"decAns":0.25,"check":"true"},"frcdgm":null}],"questionValues":{"values":[{"id":"operandD1","type":11,"value":"15"},{"id":"operandN1","type":10,"value":"4"}],"calculatedValue":null,"id":"1"},"question":"Find the fractions that are <em>Less Than or Equal (≤)</em> to","id":"10"},{"values":[{"slex":null,"frcex":{"type":"frcex","whole":0.0,"dom":18.0,"num":2.0,"decAns":0.1111111111111111,"check":"false"},"frcdgm":null},{"slex":null,"frcex":{"type":"frcex","whole":0.0,"dom":8.0,"num":3.0,"decAns":0.375,"check":"true"},"frcdgm":null},{"slex":null,"frcex":{"type":"frcex","whole":0.0,"dom":100.0,"num":25.0,"decAns":0.25,"check":"false"},"frcdgm":null},{"slex":null,"frcex":{"type":"frcex","whole":0.0,"dom":44.0,"num":10.0,"decAns":0.22727272727272727,"check":"false"},"frcdgm":null},{"slex":null,"frcex":{"type":"frcex","whole":0.0,"dom":39.0,"num":13.0,"decAns":0.3333333333333333,"check":"true"},"frcdgm":null},{"slex":null,"frcex":{"type":"frcex","whole":0.0,"dom":9.0,"num":3.0,"decAns":0.3333333333333333,"check":"true"},"frcdgm":null},{"slex":null,"frcex":{"type":"frcex","whole":0.0,"dom":45.0,"num":5.0,"decAns":0.1111111111111111,"check":"false"},"frcdgm":null},{"slex":null,"frcex":{"type":"frcex","whole":0.0,"dom":21.0,"num":6.0,"decAns":0.2857142857142857,"check":"false"},"frcdgm":null},{"slex":null,"frcex":{"type":"frcex","whole":0.0,"dom":30.0,"num":10.0,"decAns":0.3333333333333333,"check":"true"},"frcdgm":null}],"questionValues":{"values":[{"id":"operandD1","type":11,"value":"27"},{"id":"operandN1","type":10,"value":"9"}],"calculatedValue":null,"id":"1"},"question":"Find the fractions that are <em>Greater Than or Equal (≥)</em> to","id":"10"},{"values":[{"slex":null,"frcex":{"type":"frcex","whole":0.0,"dom":20.0,"num":4.0,"decAns":0.2,"check":"true"},"frcdgm":null},{"slex":null,"frcex":{"type":"frcex","whole":0.0,"dom":30.0,"num":15.0,"decAns":0.5,"check":"false"},"frcdgm":null},{"slex":null,"frcex":{"type":"frcex","whole":0.0,"dom":18.0,"num":9.0,"decAns":0.5,"check":"false"},"frcdgm":null},{"slex":null,"frcex":{"type":"frcex","whole":0.0,"dom":5.0,"num":2.0,"decAns":0.4,"check":"true"},"frcdgm":null},{"slex":null,"frcex":{"type":"frcex","whole":0.0,"dom":74.0,"num":36.0,"decAns":0.4864864864864865,"check":"false"},"frcdgm":null},{"slex":null,"frcex":{"type":"frcex","whole":0.0,"dom":32.0,"num":18.0,"decAns":0.5625,"check":"false"},"frcdgm":null},{"slex":null,"frcex":{"type":"frcex","whole":0.0,"dom":12.0,"num":6.0,"decAns":0.5,"check":"false"},"frcdgm":null},{"slex":null,"frcex":{"type":"frcex","whole":0.0,"dom":24.0,"num":7.0,"decAns":0.2916666666666667,"check":"true"},"frcdgm":null},{"slex":null,"frcex":{"type":"frcex","whole":0.0,"dom":15.0,"num":5.0,"decAns":0.3333333333333333,"check":"true"},"frcdgm":null}],"questionValues":{"values":[{"id":"operandD1","type":11,"value":"24"},{"id":"operandN1","type":10,"value":"10"}],"calculatedValue":null,"id":"1"},"question":"Find the fractions that are <em>Less Than or Equal (≤)</em> to","id":"10"},{"values":[{"slex":null,"frcex":{"type":"frcex","whole":0.0,"dom":8.0,"num":6.0,"decAns":0.75,"check":"true"},"frcdgm":null},{"slex":null,"frcex":{"type":"frcex","whole":0.0,"dom":18.0,"num":15.0,"decAns":0.8333333333333334,"check":"true"},"frcdgm":null},{"slex":null,"frcex":{"type":"frcex","whole":0.0,"dom":20.0,"num":15.0,"decAns":0.75,"check":"true"},"frcdgm":null},{"slex":null,"frcex":{"type":"frcex","whole":0.0,"dom":24.0,"num":16.0,"decAns":0.6666666666666666,"check":"true"},"frcdgm":null},{"slex":null,"frcex":{"type":"frcex","whole":0.0,"dom":60.0,"num":22.0,"decAns":0.36666666666666664,"check":"false"},"frcdgm":null},{"slex":null,"frcex":{"type":"frcex","whole":0.0,"dom":12.0,"num":3.0,"decAns":0.25,"check":"false"},"frcdgm":null},{"slex":null,"frcex":{"type":"frcex","whole":0.0,"dom":18.0,"num":12.0,"decAns":0.6666666666666666,"check":"true"},"frcdgm":null},{"slex":null,"frcex":{"type":"frcex","whole":0.0,"dom":100.0,"num":45.0,"decAns":0.45,"check":"false"},"frcdgm":null},{"slex":null,"frcex":{"type":"frcex","whole":0.0,"dom":24.0,"num":15.0,"decAns":0.625,"check":"false"},"frcdgm":null}],"questionValues":{"values":[{"id":"operandD1","type":11,"value":"9"},{"id":"operandN1","type":10,"value":"6"}],"calculatedValue":null,"id":"1"},"question":"Find the fractions that are <em>Greater Than or Equal (≥)</em> to","id":"10"},{"values":[{"slex":null,"frcex":{"type":"frcex","whole":0.0,"dom":36.0,"num":27.0,"decAns":0.75,"check":"false"},"frcdgm":null},{"slex":null,"frcex":{"type":"frcex","whole":0.0,"dom":21.0,"num":15.0,"decAns":0.7142857142857143,"check":"false"},"frcdgm":null},{"slex":null,"frcex":{"type":"frcex","whole":0.0,"dom":20.0,"num":15.0,"decAns":0.75,"check":"false"},"frcdgm":null},{"slex":null,"frcex":{"type":"frcex","whole":0.0,"dom":36.0,"num":15.0,"decAns":0.4166666666666667,"check":"true"},"frcdgm":null},{"slex":null,"frcex":{"type":"frcex","whole":0.0,"dom":48.0,"num":22.0,"decAns":0.4583333333333333,"check":"true"},"frcdgm":null},{"slex":null,"frcex":{"type":"frcex","whole":0.0,"dom":15.0,"num":8.0,"decAns":0.5333333333333333,"check":"true"},"frcdgm":null},{"slex":null,"frcex":{"type":"frcex","whole":0.0,"dom":18.0,"num":14.0,"decAns":0.7777777777777778,"check":"false"},"frcdgm":null},{"slex":null,"frcex":{"type":"frcex","whole":0.0,"dom":40.0,"num":30.0,"decAns":0.75,"check":"false"},"frcdgm":null},{"slex":null,"frcex":{"type":"frcex","whole":0.0,"dom":45.0,"num":27.0,"decAns":0.6,"check":"true"},"frcdgm":null}],"questionValues":{"values":[{"id":"operandD1","type":11,"value":"24"},{"id":"operandN1","type":10,"value":"17"}],"calculatedValue":null,"id":"1"},"question":"Find the fractions that are <em>Less Than or Equal (≤)</em> to","id":"10"}],"questionDefault":"Find the three equivalent fractions in the following table."}');

		window.setTimeout(function() {
			LucyAlex.inputPad = LucyAlex.Chooser.create(properties, selectableBatch);
			LucyAlex.Chooser.Loader.load({
				noFunctionPanel: true
			});
		}, 0);
		*/
		/* <== LUCYASTAR CODE */

		}
	]);