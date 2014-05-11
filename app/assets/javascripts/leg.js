$(document).ready(function(){
  $("#leg-text").hide();

  $("#left-leg").on("mouseover", function(){
    $("#leg-text").fadeIn();
  });
  $("#left-leg").on("mouseleave", function(){
    $("#leg-text").fadeOut();
  });

  $("#right-leg").on("mouseover", function(){
    $("#leg-text").fadeIn();
  });
  $("#right-leg").on("mouseleave", function(){
    $("#leg-text").fadeOut();
  });

  $("#right-leg").on("click", function(){
  $(".torso").animate({right: "400px"}, 500).fadeOut();
  $("#chest-left").hide();
  $("#chest-right").hide();
  $("#left-arm").hide();
  $("#right-arm").hide();
  $("#left-leg").hide();
  $("#right-leg").hide();
  $("#abdominals").hide();

  });

  $("#left-leg").on("click", function(){
  $(".torso").animate({right: "400px"}, 500).fadeOut();
  $("#chest-left").hide();
  $("#chest-right").hide();
  $("#left-arm").hide();
  $("#right-arm").hide();
  $("#left-leg").hide();
  $("#right-leg").hide();
  $("#abdominals").hide();

  });




});
