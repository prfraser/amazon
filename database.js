const mongoose = require('mongoose');
const db = mongoose.connect('mongodb://localhost/products', { useMongoClient:true });
mongoose.Promise = Promise;

module.exports = { mongoose, db };