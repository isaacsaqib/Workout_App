$(document).ready(function(){
  $("#abdominals-text").hide()


  $("#Abdominals").on("mouseover", function(){
    $("#Abdominals-text").fadeIn()
  })
  $("#Abdominals").on("mouseleave", function(){
    $("#abdominals-text").fadeOut()
  })

  $("#Abdominals").on("click", function(){
  $(".torso").animate({right: "400px"}, 500).fadeOut();
  $("#Left-Chest").hide();
  $("#Right-Chest").hide();
  $("#Left-Arm").hide();
  $("#Right-Arm").hide();
  $("#Left-Leg").hide();
  $("#Right-Leg").hide();
  $("#Abdominals").hide();
 $("#rear-torso-text").hide();
  });


});
