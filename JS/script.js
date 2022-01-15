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

// menu....

// class pizzaOrder{
//   constructor (size, crust, toppings) {
//     this.size = size;
//     this.crust = crust;
//     this.topping = toppings;
//     this.price = 0;
// }
// };

// choosePizza=function(){
//   this.size = $("#small input:selected").val();
//   document.getElementById("#size").innerHTML = this.size;
// }
  
// choosePizza1=function(){
//   this.size = $("#medium").val();
//   document.getElementById("#size").innerHTML = this.size;
// }
  
// choosePizza2=function(){
//   this.size = $("#large").val();
//   document.getElementById("#size").innerHTML = this.size;
// }
  

$("#palace").on("submit", function (e) {
  e.preventDefault();
  

let pizza=""
if(small.checked) {
  pizza="small";

}else if(medium.checked){
  pizza="medium";
}else if(large.checked){
  pizza="large";
};


if(pizza=="small"){ 
  $("#size").append("small")
  
}else if(pizza=="medium"){
 
  $("#size").append("medium")
 
}else if(pizza=="large"){
 
  $("#size").append("large")
 
}


let crust=""
if(crispy.checked) {
  crust="crispy";

}else if(stuffed.checked){
  crust="stuffed";
}else if(gluten_free.checked){
  crust="gluten_free";
};

if(crust=="crispy"){ 
  
  $("#crust").append("crispy")
  
}else if(crust=="stuffed"){
 
  $("#crust").append("stuffed")
 
}else if(crust=="gluten_free"){
 
  $("#crust").append("gluten_free")
 
}

let toppings=""
if(pepperoni.checked) {
  toppings="pepperoni";

}else if(supreme.checked){
  toppings="supreme";
}else if(hawaiian.checked){
  toppings="hawaiian";
};

if(toppings=="pepperoni"){ 
  
  $("#toppings").append("pepperoni")
  
}else if(toppings=="supreme"){
 
  $("#toppings").append("supreme")
 
}else if(toppings=="hawaiian"){
 
  $("#toppings").append("hawaiian")
 
}
});































// choosePizza = function () {
//   this.flavor = $("#flavor option:selected").val();
// document.getElementById("pflavor").innerHTML = this.flavor;
// }
// chooseSize = function () {
//   this.size = $("#size option:selected").val();
// document.getElementById("psize").innerHTML = this.size;
// }
// chooseCrust = function () {
//   this.crust = $("#crust option:selected").val();
// document.getElementById("pcrust").innerHTML = this.crust;
// }
// chooseToppings = function () {
//   this.topping = $("#topping option:selected").val();
// document.getElementById("ptoppings").innerHTML = this.topping;
// }
// quantitySelectChange = function () {
//   this.quantity = $("#number").val();
// document.getElementById("pnumber").innerHTML = this.quantity;
// }
