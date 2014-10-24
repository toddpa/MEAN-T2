'use strict';

 var mongoose = require('mongoose');
 var Schema = mongoose.Schema;

 var ElementsSchema = new Schema({
 	page: [{
 		script: String
 	}],
 	example: [{
 		script: String,
 		title: String
 	}],
 	question: [{
 		script: String,
 		title: String
 	}],
 	links: [{
 		name: String,
 		description: String,
 		location: String
 	}],
 	app: String,
 	productid: String,
 	topic: String,
 	name: String,
 	image: String,
 	note: String,
 	icon: String,
 	level: String,
 	order: Number,
 	state: String,
 	registered: Boolean
 }, {
 	collection: 'elements'
 });

 mongoose.model('Elements', ElementsSchema);