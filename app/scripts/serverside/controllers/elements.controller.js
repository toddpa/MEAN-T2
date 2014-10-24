'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose');
var elementsModel = require('../models/elements.model');
var Elements = mongoose.model('Elements');
var log4js = require('log4js');
var logger = log4js.getLogger('Elements');
logger.setLevel('DEBUG');

/**
 * Return a lsit of all elements as ordered by the order field
 */
exports.getElements = function(req, res) {
	logger.debug('Fetching distinct App names ');
	var appNames = Elements.find({
		app: req.params.app
	}, {
		app: 1,
		name: 1,
		_id: 0
	}).sort({
		order: 'asc',
		test: -1
	}).exec(function(err, elements) {
		if (err) return handleError(err);
		if (appNames) {
			logger.debug(appNames);
			res.jsonp(appNames.emitted.complete[0]);
		} else {
			next();
		}
	});
};

/**
 * Return a full version of a element record given a question name
 */
exports.getElement = function(req, res) {
	logger.debug('Fetching element ' + req.params.element + ' for app ' + req.params.app);
	var batch = Elements.findOne({
		app: req.params.app,
		name: req.params.element
	}, function(err, element) {
		if (err) return handleError(err);
		if (element) {
			res.jsonp(element);
		}
	});
};


/**
 * Returns the App names within the Element collection
 */
exports.getAppNames = function(req, res) {
	logger.debug('Fetching distinct App names ');
	var appNames = Elements.distinct('app').exec(function(err, elements) {
		if (err) return handleError(err);
		if (elements) {
			logger.debug(appNames);
			res.jsonp(appNames.emitted.complete[0]);
		} else {
			next();
		}
	});
};