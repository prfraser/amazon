const { mongoose, db } = require('../database');
const Counter = db.model('counter', { 
	pageName: String,
	pageCount: Number
});

module.exports = Counter;