var express = require('express');
var Product = require('../models/product');
var router = express.Router();

router.use(function(req, res, next) {
  console.log('something is happening!');
  next();
});

router.route('/products')
  .get(function(req, res, next){
    Product.find(function(err, products) {
      if(err){
        return next(err);
      } else {
        res.json(products);
      }
    });
  })

  .post(function(req, res, next){

    var product = new Product();

    product.name = req.body.name;
    product.inStock = req.body.inStock;
    product.cost = req.body.cost;
    //Finish the post route to properly create a new product..
    console.log(product);
    console.log(req.body);
    product.save(function(err, product){
      if(err){
        next(err);
      } else {
        res.json(product);
      }
    });
  });

module.exports = router;
