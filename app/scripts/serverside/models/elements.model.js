  'use strict';

 /*
 {
    "page": [
        {
            "script": "FRACTIONS-APP-PREVIEW-PERCENTAGE-PG01"
        }
    ],
    "example": [
        {
            "script": "FRACTIONS-APP-PREVIEW-PERCENTAGE-EX01",
            "title": "Example 1"
        }
    ],
    "question": [
        {
            "script": "FRACTIONS-APP-PREVIEW-PERCENTAGE-Q01",
            "title": "Shape problems 1"
        }
    ],
    "links": [],
    "app": "PERCENTAGES",
    "productid": "3KPcFRPREVIEW",
    "topic": "PERCENTAGES",
    "name": "FRACTIONS_APP_PREVIEW_PERCENTAGE",
    "image": "CELL-FRACTIONS-APP-PREVIEW-PERCENTAGE.png",
    "note": "There are no notes assigned to the spreadsheet to describe the element.",
    "icon": "ICON-FRACTIONS-APP-PREVIEW-PERCENTAGE.png",
    "level": "BRONZE",
    "order": 10,
    "state": "IMPORTED",
    "registered": false
}*/

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