$(document).ready(function(){
  $("#login-form").hide();

  $("#login-link").on("click", function(event){
    event.preventDefault();
    $("#login-form").slideDown();


  })


})
