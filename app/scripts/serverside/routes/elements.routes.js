'use strict';

module.exports = function(app, router) {
  var elementsController = require('../controllers/elements.controller');
  router.get('/:app', elementsController.getElements);
  app.use('/elements', router);
};