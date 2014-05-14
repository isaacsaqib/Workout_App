$(document).ready(function(){
  $("#arm-text").hide();
  $(".arm-image").hide();
  $("#Bicep").hide();
  $("#bicep-text").hide();
  $("#Tricep").hide();
  $("#tricep-text").hide();
  $("#Forearm").hide();
  $("#forearm-text").hide();


  $("#Right-Arm").on("click", function(){
  $(".torso").animate({right: "400px"}, 500).fadeOut();
  $("#Left-Chest").hide();
  $("#Right-Chest").hide();
  $("#Left-Arm").hide();
  $("#Right-Arm").hide();
  $("#Left-Leg").hide();
  $("#Right-Leg").hide();
  $("#Abdominals").hide();
  $(".arm-image").fadeIn();
  $("#Bicep").show();
  $("#Tricep").show();
  $("#Forearm").show();
   $("#rear-torso-text").hide();
  });

 $("#Left-Arm").on("click", function(){
  $(".torso").animate({right: "400px"}, 500).fadeOut();
  $("#Left-Chest").hide();
  $("#Right-Chest").hide();
  $("#Left-Arm").hide();
  $("#Right-Arm").hide();
  $("#Left-Leg").hide();
  $("#Right-Leg").hide();
  $("#Abdominals").hide();
  $(".arm-image").fadeIn();
  $("#Bicep").show();
  $("#Tricep").show();
  $("#Forearm").show();
  $("#rear-torso-text").hide();
  });

  $("#Bicep").on("click", function(){
    $(".arm-image").animate({top: "400px"}, 500).fadeOut();
    $("#Bicep").hide();
    $("#Tricep").hide();

  });



  $("#Tricep").on("click", function(){
    $(".arm-image").animate({top: "400px"}, 500).fadeOut();
    $("#Bicep").hide();
    $("#Tricep").hide();


  });



  $("#Forearm").on("click", function(){
    $(".arm-image").animate({top: "400px"}, 500).fadeOut();
    $("#Bicep").hide();
    $("#Tricep").hide();
    $("#Forearm").hide();

  });







});
