'use strict';

 var mongoose = require('mongoose');
 var Schema = mongoose.Schema;

 var BatchesSchema = new Schema({
 	valueset: [Schema.Types.Mixed],
 	values: [Schema.Types.Mixed],
 	app: String,
 	topic: String,
 	element: String,
 	name: String,
 	level: String
 }, {
 	collection: 'batches'
 });

 mongoose.model('Batches', BatchesSchema);