$(document).ready(function(){
  $("#chest-text").hide()

  $("#chest-left").on("mouseover", function(){
    $("#chest-text").fadeIn()
  })
  $("#chest-left").on("mouseleave", function(){
    $("#chest-text").fadeOut()
  })

  $("#chest-right").on("mouseover", function(){
    $("#chest-text").fadeIn()
  })
  $("#chest-right").on("mouseleave", function(){
    $("#chest-text").fadeOut()
  })

  $("#chest-left").on("click", function(){
  $(".torso").animate({right: "400px"}, 500).fadeOut();
  $("#chest-left").hide();
  $("#chest-right").hide();
  $("#left-arm").hide();
  $("#right-arm").hide();
  $("#left-leg").hide();
  $("#right-leg").hide();
  $("#abdominals").hide();

  });

  $("#chest-right").on("click", function(){
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
