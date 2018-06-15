function Pizza (size, topping){
  this.size = size;
  this.topping = [];
}

Pizza.prototype.pizzaOrder = function() {
  return this.size + "," + this.topping ;
}


Pizza.prototype.pizzaSize = function() {
  var size = $("input[type='radio'][name='size']:checked").val()
return size
console.log(size);
}

Pizza.prototype.toppingChoice = function() {
  var toppingArray = []
  $("input[name='array']:checked").each(function ()
  {
      toppingArray.push($(this).val());
  });
  return toppingArray
}

$(document).ready(function() {

// var size =
var pizza = new Pizza ('size, toppings')

  $(".radio").click(function(event){
    var size = pizza.pizzaSize();
    console.log(size);
  });

  $("#toppingList").click(function(event){
    var toppings = pizza.toppingChoice();
    console.log(toppings);
  });

$("#submit").click(function() {
  event.preventDefault();
  $('#order').append(pizza.pizzaOrder())

  });
});
