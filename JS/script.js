// alert news...
let restaurant=confirm("We'd like to show you notifications for the latest pizza offers and updates.")
alert("Thank you for your response\n we are here to serve you better\n and welcome again.");

// hover on landing page image..
$(document).ready(function() {
  $("#work1").hover(function(){
  $(".work" ,this).slideToggle(100, "linear").display(100, "linear");
   }, function(){
  $(".work" ,this).slideToggle(100, "linear").display(100, "linear");
  });
});

// menu...
// class pizzaOrder{
//   constructor (size, crust, toppings) {
//     this.size = size;
//     this.crust = crust;
//     this.topping = toppings;
//     this.price = 0;
// }
// };

