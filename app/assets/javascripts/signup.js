$(document).ready(function(){
  $("#sign-up-form").hide();

  $("#signuplink").on("click", function(event){
    event.preventDefault();
    $("#form-container").fadeIn();
    $("#sign-up-form").slideDown(1000);


  })





});
