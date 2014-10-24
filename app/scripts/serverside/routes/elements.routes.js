'use strict';

module.exports = function(app, router) {
	var elementsController = require('../controllers/elements.controller');
	router.get('/:app', elementsController.getElements);
	router.get('/apps/distinct', elementsController.getAppNames);
	app.use('/elements', router);
};