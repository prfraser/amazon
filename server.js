const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Set pug as view engine
app.set('view engine', 'pug');

// Use bodyparser for form parsing
app.use(bodyParser.urlencoded({ extended: true }));

// Route file
app.use('/', require('./routes'));

// Start app
app.listen(port, console.log('Server running...'));