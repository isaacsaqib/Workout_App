$(document).ready(function(){
  $("#videoContainer").hide();
  $(".arm-image").hide();
  $("#Bicep").hide();
  $("#Tricep").hide();
  $("#Forearm").hide();


  $("#Right-Arm").on("click", function(){
    $(".torso").animate({right: "400px"}, 500).fadeOut();
    $(".bodypart").hide();
    $(".arm-image").fadeIn();
    $("#Bicep").show();
    $("#Tricep").show();
    $("#Forearm").show();
    $("#rear-torso-text").hide();
  });


 $("#Left-Arm").on("click", function(){
    $(".torso").animate({right: "400px"}, 500).fadeOut();
    $(".bodypart").hide();
    $(".arm-image").fadeIn();
    $("#Bicep").show();
    $("#Tricep").show();
    $("#Forearm").show();
    $("#rear-torso-text").hide();
  });

  $("#Bicep").on("click", function(){
    $(".arm-image").animate({top: "400px"}, 500).fadeOut();
    $(".bodypart").hide();
    $("#videoContainer").show();
    getAndAppendVideoIframes("bicep workout", $("#videoContainer"));
  });

  $("#Tricep").on("click", function(){
    $(".arm-image").animate({top: "400px"}, 500).fadeOut();
    $("#Bicep").hide();
    $("#Tricep").hide();
    $("#videoContainer").show();
    getAndAppendVideoIframes("tricep workout", $("#videoContainer"));
  });

  $("#Forearm").on("click", function(){
    $(".arm-image").animate({top: "400px"}, 500).fadeOut();
    $(".bodypart").hide();
    $("#videoContainer").show();
    getAndAppendVideoIframes("forearm workout", $("#videoContainer"));
  });

});
