$(document).ready(function(){
  $("#Right-Lat").hide();
  $("#Left-Lat").hide();

  $("#Right-Lat").on("click", function(){
    $("#Right-Lat").hide();
    $("#Left-Lat").hide();
    $("#Right-Glute").hide();
    $("#Left-Glute").hide();
    $(".rear-torso-image").animate({top: "400px"}, 500).fadeOut();
  });

   $("#Left-Lat").on("click", function(){
    $("#Right-Lat").hide();
    $("#Left-Lat").hide();
    $("#Right-Glute").hide();
    $("#Left-Glute").hide();
    $(".rear-torso-image").animate({top: "400px"}, 500).fadeOut();
  });

});

