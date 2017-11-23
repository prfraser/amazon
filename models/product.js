const { mongoose, db } = require('../database');
const Product = db.model('Product', { 
	name: String,
	description: String,
	price: Number
});

module.exports = Product;