$(document).ready(function(){
  $("#arm-text").hide();
  $(".arm-image").hide();
  $("#bicep").hide();

  $("#left-arm").on("mouseover", function(){
    $("#arm-text").fadeIn()
  })
  $("#left-arm").on("mouseleave", function(){
    $("#arm-text").fadeOut()
  })

  $("#right-arm").on("mouseover", function(){
    $("#arm-text").fadeIn()
  })
  $("#right-arm").on("mouseleave", function(){
    $("#arm-text").fadeOut()
  })

  $("#right-arm").on("click", function(){
  $(".torso").animate({right: "400px"}, 500).fadeOut();
  $("#chest-left").hide();
  $("#chest-right").hide();
  $("#left-arm").hide();
  $("#right-arm").hide();
  $("#left-leg").hide();
  $("#right-leg").hide();
  $("#abdominals").hide();
  $(".arm-image").fadeIn();
  $("#bicep").show();


  });

  $("#left-arm").on("click", function(){
  $(".torso").animate({right: "400px"}, 500).fadeOut();
  $("#chest-left").hide();
  $("#chest-right").hide();
  $("#left-arm").hide();
  $("#right-arm").hide();
  $("#left-leg").hide();
  $("#right-leg").hide();
  $("#abdominals").hide();
  $(".arm-image").fadeIn()
  $("#bicep").show();

  });

  $("#bicep").on("click", function(){
    $(".arm-image").animate({top: "400px"}, 500).fadeOut();
    $("#bicep").hide();

  })






});
