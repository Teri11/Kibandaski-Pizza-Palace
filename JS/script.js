// alert news...
// let restaurant=confirm("We'd like to show you notifications for the latest pizza offers and updates.")
// alert("Thank you for your response\n we are here to serve you better\n and welcome again.");

// hover on landing page image..
$(document).ready(function() {
  $("#work1").hover(function(){
  $(".work" ,this).slideToggle(100, "linear").display(100, "linear");
   }, function(){
  $(".work" ,this).slideToggle(100, "linear").display(100, "linear");
  });
});



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



// adddition of checkout..
var value = $("input[type=radio][name=pizza]:checked").val();
        if (value=="small") {
           value=800;
        }else if(value=="medium"){
          value=10010;
       }else if(value=="large"){
         value=1500;
       }else{
         value=0;
       }
       
       var crustyy = $("input[type=radio][name=crusty]:checked").val();
       if (crustyy=="crispy") {
          crustyy=100;
       }else if(crustyy=="stuffed"){
         crustyy=100;
      }else if(crustyy=="gluten_free"){
        crustyy=100;
      }else{
        crustyy=0;
      }

      var topz = $("input[type=radio][name=toppings]:checked").val();
       if (topz=="pepperoni") {
          topz=50;
       }else if(topz==" supreme"){
         topz=50;
      }else if(topz=="hawaiian"){
        topz=50;
      }else{
        topz=0;
      }
      let quantity=$("#number").val();
      $("#quantity").html(quantity);
      totalCost=value +crustyy +topz;
      totalCost=totalCost*quantity;
      $("#price").html(totalCost);
      

// end of addition..




let name=""
if(neapolitan.selected){
  name="neapolitan";
}else if(chicago.selected){
  name="chicago";
}else if(new_york_style.selected){
  name="new_york_style";
}else if(sicilian.selected){
  name="sicilian";
}else if(greek.selected){
  name="greek";
}else if(california.selected){
  name="california";
}else if(detroit.selected){
  name="detroit";
}else if(saint_louis.selected){
  name="saint_louis";
}



if(name=="neapolitan"){
  $("#name").append("neapolitan")
}else if(name=="chicago"){
  $("#name").append("chicago")
}else if(name=="new_york_style"){
  $("#name").append("new_york_style")
}else if(name=="sicilian"){
  $("#name").append("sicilian")
}else if(name=="greek"){
  $("#name").append("greek")
}else if(name=="california"){
  $("#name").append("california")
}else if(name=="detroit"){
  $("#name").append("detroit")
}else if(name=="saint_louis"){
  $("#name").append("saint_louis")
}

});



// form validation
  $("#btnn").on("click", function(event) {
    event.preventDefault();
            var name = $("#namee").val()
            var contact = $("#contactt").val()
            var destination = $("#destinationn").val()
            alert("Thank you" +" " + name + ",\n We have received your order for: "+" "+ contact+" "+ ",\n Your order will be delivered to your location in:"+" "+ destination)
});



    // hide alert....
$(document).ready(function(){
  $("#add").click(function(){
  $("#exampleModal").hide();
  });
  $("#add").click(function(){
  $("#exampleModal2").show();
  });
  });
  $(document).ready(function(){
    $("#proceed").click(function(){
    $("#exampleModal2").hide();
    });
    $("#proceed").click(function(){
    $("#exampleModal1").show();
    });
    });
    $(document).ready(function(){
      $("#btnn").click(function(){
      $("#exampleModal1").hide();
      });
      $("#btnn").click(function(){
      $("#end").show();
      });
      });











