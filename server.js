var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Product = require('./models/product');
var productRouter = require('./routes/products')
var port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {

  // Need to do Product.find to get all products,
  // and then render the index page
  // For inspiration, look at the GET route in routers/products

  res.render('index')
});

app.use('/api', somethingRouter);

app.listen(port, function(err) {
  if (err) {
    console.log('app failed! ' + err);
  } else {
    console.log('app listening on ' + port);
  }
});
