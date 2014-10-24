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
 * Return the batch records for a given element
 */
exports.getElements = function(req, res) {
	logger.debug('Fetching distinct App names ');
	var appNames = Elements.distinct('name', {app : req.params.app}).exec(function(err, elements) {
		if (err) return handleError(err);
		if (elements) {
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
	var batch = Elements.findOne({
		name: req.params.question
	}, function(err, elements) {
		if (err) return handleError(err);
		if (elements) {
			res.jsonp(elements);
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