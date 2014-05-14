$(document).ready(function(){
  $("#Right-Glute").hide();
  $("#Left-Glute").hide();

  $("#Right-Glute").on("click", function(){
    $("#Right-Glute").hide();
    $("#Left-Glute").hide();
    $("#Right-Lat").hide();
    $("#Left-Lat").hide();
    $(".rear-torso-image").animate({top: "400px"}, 500).fadeOut();


  });

  $("#Left-Glute").on("click", function(){
    $("#Right-Glute").hide();
    $("#Left-Glute").hide();
    $("#Right-Lat").hide();
    $("#Left-Lat").hide();
    $(".rear-torso-image").animate({top: "400px"}, 500).fadeOut();


  });

});
