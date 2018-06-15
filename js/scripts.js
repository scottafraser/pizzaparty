function Pizza (size, topping, price) {
  this.size = size;
  this.topping = [];
  this.price = 0
}

Pizza.prototype.pizzaOrder = function() {
  $('#order').text(this.size);
  $('#toppingUl').append(this.toppings + ',');
  $('#price').text('$' + (this.sizePrice() + this.toppingPrice()));
  // return this.size + "," + this.topping ;
}

Pizza.prototype.pizzaSize = function() {
  var size = $("input[type='radio'][name='size']:checked").val()
  return size
}

Pizza.prototype.toppingChoice = function() {
  var toppingArray = []
  $("input[name='array']:checked").each(function ()
  {
      toppingArray.push($(this).val());
  });
  console.log(toppingArray);
  return toppingArray

}

Pizza.prototype.sizePrice = function() {
  if (this.size === 'small') {
    this.price = 10
  } else if (this.size === 'medium') {
    this.price = 12
  } else {
    this.price = 14
  }
  return this.price
}

Pizza.prototype.toppingPrice = function() {
  for (var i = 0, len = (this.toppings).length; i < len; i++) {
  var addOn = i + 1
  }
  return addOn
}


$(document).ready(function() {
  $('#enter').click(function(event) {
    $('#main').fadeIn();
    $('#cover').hide();
  });


var pizza = new Pizza ('size','toppings', 'price')
var pizza2 = new Pizza ('size','toppings', 'price')
var pizza3 = new Pizza ('size', 'toppigns','price')

$(".radio").click(function(event){
  pizza.size = pizza.pizzaSize();
});

$("#toppingList").click(function(event){
  pizza.toppings = pizza.toppingChoice();
});

$("#submit").click(function() {
  event.preventDefault();
  $("#orderModal").modal();
  pizza.pizzaOrder();
  });
});
