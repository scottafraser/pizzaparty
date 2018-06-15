function Pizza (size, topping){
  this.size = size
  this.topping = []
}

// Pizza.prototype.pizzaOrder = function() {
//   return this.size + "," this.topping [],
// }


function pizzaSize() {
  var size = $("input[type='radio'][name='size']:checked").val()
return size
console.log(size);
}

$(document).ready(function() {

 var pizza = new Pizza ('size', '[toppings]')

  $(".radio").click(function(event){
    var size = $("input[type='radio'][name='size']:checked").val()
    console.log(size);
  });

  $("#toppingList").click(function(event){
    var toppingArray = []
    $("input[name='array']:checked").each(function ()
    {
        toppingArray.push($(this).val());
    });
    console.log(toppingArray);
  });
//
// $("#submit").click(function() {
//   event.preventDefault();

  });
