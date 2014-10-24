'use strict';

module.exports = function(app, router) {
  var batchesController = require('../controllers/batches.controller');
  router.get('/:app/:element', batchesController.getBatchesForElement);
  router.get('/:app/:element/:question/concise', batchesController.getBatchConcise);
  router.get('/:app/:element/:question/full', batchesController.getBatchFull);
  app.use('/questions', router);
};