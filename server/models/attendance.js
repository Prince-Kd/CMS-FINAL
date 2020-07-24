const mongoose = require('mongoose');

const attendanceSchema = mongoose.Schema({
	data: {
		men: {type: Number,default: 0},
		women: {type: Number,default: 0},
		children: {type: Number,default: 0},
		total: {type: Number,default: 0},
	},
	date: {type: String}
})

const Attendance = mongoose.model('Attendance', attendanceSchema)

module.exports = {Attendance}