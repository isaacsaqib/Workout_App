$(document).ready(function(){
  $("#login-form").hide();

  $("#login-link").on("click", function(event){
    event.preventDefault();
     $("#form-container").fadeIn(1000);
    $("#login-form").slideDown();




  })


})


