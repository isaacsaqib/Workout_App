$(document).ready(function(){
  $("#Right-Lat").hide();
  $("#Left-Lat").hide();


  $("#Right-Lat").on("click", function(){
    $(".bodypart").hide();
    $(".rear-torso-image").animate({top: "400px"}, 500).fadeOut();
    $("#videoContainer").show();
    getAndAppendVideoIframes("lat workout", $("#videoContainer"));
  });

   $("#Left-Lat").on("click", function(){
    $(".bodypart").hide();
    $(".rear-torso-image").animate({top: "400px"}, 500).fadeOut();
    $("#videoContainer").show();
    getAndAppendVideoIframes("lat workout", $("#videoContainer"));

  });

});

