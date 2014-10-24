'use strict';

module.exports = function(app, router) {
	var elementsController = require('../controllers/elements.controller');
	router.get('/:app/:element', elementsController.getElement);
	app.use('/element', router);
};