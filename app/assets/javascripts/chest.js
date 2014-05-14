$(document).ready(function(){
  $("#chest-text").hide()



  $("#Left-Chest").on("click", function(){
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



  $("#Right-Chest").on("click", function(){
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
