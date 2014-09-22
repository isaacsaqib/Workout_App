$(document).ready(function(){
  $("#form-box-signup").hide();
  $("#signup-trigger").on("click", function(){
    $("#form-box-login").fadeOut();
    $("#form-box-signup").slideDown();

  })

  $("#signuplink").on("click", function(event){
    event.preventDefault();
    $("#form-container").fadeIn();
    $("#sign-up-form").slideDown(1000);


  })





});
