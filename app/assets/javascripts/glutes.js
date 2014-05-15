$(document).ready(function(){
  $("#Right-Glute").hide();
  $("#Left-Glute").hide();


  $("#Right-Glute").on("click", function(){
    $(".bodypart").hide();
    $(".rear-torso-image").animate({top: "400px"}, 500).fadeOut();
    $("#videoContainer").show();
    getAndAppendVideoIframes("butt workout", $("#videoContainer"));

  });

  $("#Left-Glute").on("click", function(){
    $(".bodypart").hide();
    $(".rear-torso-image").animate({top: "400px"}, 500).fadeOut();
    getAndAppendVideoIframes("butt workout", $("#videoContainer"));
  });

});
