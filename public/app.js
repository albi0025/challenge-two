console.log('MAKE SURE YOU CAN SEE THIS IN YOUR CONSOLE....');

var addProduct = function(event){
  event.preventDefault();

  var name = $('#name').val();
  var inStock = $('#inStock').val();
  var cost= $('#cost').val();

  var product = {
    name: name,
    inStock: inStock,
    cost: cost
  };

  $.ajax({
    url: '/api/products',
    method: 'POST',
    data: product
  }).done(function(data){

    console.log('I posted a product!', data);

    //BONUS: Update the products table without
    // refreshing the page...
    var tr = '<tr><td>' + data.name + '</td><td>' + data.cost + '</td><td>' + data.inStock + '</td></tr>'
    var table = $('#productTable tr:last').after(tr);


  });
};

$('#addProduct').on('click', addProduct);
