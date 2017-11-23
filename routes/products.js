const express = require('express');
const router = express.Router();
let Product = require('../models/product');
let Counter = require('../models/counter');

router.get('/products', (req, res) => {
  console.log('Rendering products.pug');
	Promise.all([
		Counter.find(),
		// Counter.findOneAndUpdate( { pageName: 'products'}, { $inc: { pageCount: 1 } } ),
		Product.find()
	]).then(([counter, products]) => {
		console.log(counter);
	  res.render('Products', { products, counter });
	});
});

router.get('/products/new', checkPassword, (req, res) => {
	console.log('Rendering new product.pug page')
	Product.find().then((Products) => {
		res.render('new', { Products })
	})
});

router.post('/products/new', (req, res) => {
	console.log('Posting to products/new' + req.body.name)
	let product = new Product ({ name: req.body.name, description: req.body.description, price: req.body.price })
	product.save((err) => {
		if (err){
			console.log(err);
		} else {
			console.log('Product Created');
		}
	res.redirect('/products');
	});
});

router.get('/products/delete/:id', (req, res) => {
	console.log('Attemping to delete product');
	let product = Product.findById(req.params.id);
	product.remove((err) => {
		if (err) {
			console.log(err);
		} else {
			console.log('Product Deleted');
		}
	res.redirect('/products');
	});
});

function checkPassword(req, res, next) {
	if (req.query.password !== 'password1'){
		res.send(401)
	} else {
		next()
	}
}

module.exports = router;
