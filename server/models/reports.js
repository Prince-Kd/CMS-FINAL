const mongoose = require('mongoose');

const reportSchema = mongoose.Schema({
	data: {
		tithe: {type: Number,default: 0},
		welfare: {type: Number,default: 0},
		offertory: {type: Number,default: 0},
		thanksgiving: {type: Number,default: 0},
		covenant: {type: Number,default: 0},
		other: {type: Number,default: 0},
		total: {type: Number,default: 0}
	},
	date: {type: String}
})

const Report = mongoose.model('Report', reportSchema)

module.exports = {Report}