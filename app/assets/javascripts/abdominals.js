$(document).ready(function(){
  $("#abdominals-text").hide()


  $("#abdominals").on("mouseover", function(){
    $("#abdominals-text").fadeIn()
  })
  $("#abdominals").on("mouseleave", function(){
    $("#abdominals-text").fadeOut()
  })

  $("#abdominals").on("click", function(){
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
