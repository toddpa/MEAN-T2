'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose');
var batchesModel = require('../models/batches.model');
var Batches = mongoose.model('Batches');
var log4js = require('log4js');
var logger = log4js.getLogger('math');
logger.setLevel('DEBUG');

/**
 * Create a article
 */
exports.getBatchesForElement = function(req, res) {
	logger.debug('ELEMENT: ' + req.params.element);
	/*
	var batch = Batches.find({
		element: req.params.element
	}, , function(err, batch) {
		if (err) return handleError(err);
		if (batch) {
			res.jsonp(batch);
		} else {
			next();
		}
	});
	*/

	var batch = Batches.find({
		element: req.params.element
	}).sort({
		name: 'asc',
		test: -1
	}).exec(function(err, batch) {
		if (err) return handleError(err);
		if (batch) {
			logger.trace(batch);
			res.jsonp(batch);
		} else {
			next();
		}
	});
};

exports.getBatchConcise = function(req, res) {
	var batch = Batches.findOne({
		name: req.params.question
	}, 'app element name', function(err, batch) {
		if (err) return handleError(err);
		if (batch) {
			res.jsonp(batch);
		}
	});
};

exports.getBatchFull = function(req, res) {
	var batch = Batches.findOne({
		name: req.params.question
	}, function(err, batch) {
		if (err) return handleError(err);
		if (batch) {
			res.jsonp(batch);
		}
	});
};