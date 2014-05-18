$(document).ready(function(){
  $("#Quad").hide();
  $("#Tibialis").hide();
  $("#Hamstring").hide();
  $("#Calve").hide();
  $("#leg-text").hide();
  $(".front-leg-image").hide();
  $(".rear-leg-image").hide();
  $("#rear-leg-text").hide();
  $("#videoContainer").hide();


  $("#Right-Leg").on("click", function(){
    $(".torso").animate({top: "400px"}, 500).fadeOut(4000);
    $(".bodypart").hide();
    $(".front-leg-image").fadeIn();
    $("#Tibialis").show();
    $("#Quad").show();
    $("#rear-leg-text").show();
    $("#rear-torso-text").hide();
  });

  $("#Left-Leg").on("click", function(){
    $(".torso").animate({top: "400px"}, 500).fadeOut(4000);
    $(".bodypart").hide();
    $(".front-leg-image").fadeIn();
    $("#Tibialis").show();
    $("#Quad").show();
    $("#rear-leg-text").show();
    $("#rear-torso-text").hide();
  });

  $("#Quad").on("click", function(){
    $(".bodypart").hide();
    $(".front-leg-image").animate({top: "400px"}, 500).fadeOut();
    $("#rear-leg-text").hide();
    $("#videoContainer").show();
    getAndAppendVideoIframes("quad workout", $("#videoContainer"));
  });

  $("#Tibialis").on("click", function(){
    $(".bodypart").hide();
    $(".front-leg-image").animate({top: "400px"}, 500).fadeOut();
    $("#rear-leg-text").hide();
    $("#videoContainer").show();
    getAndAppendVideoIframes("tibialis workout", $("#videoContainer"));
  });

  $("#Hamstring").on("click", function(){
    $(".bodypart").hide();
    $(".rear-leg-image").animate({top: "400px"}, 500).fadeOut();
    $("#rear-leg-text").hide();
    $("#videoContainer").show();
    getAndAppendVideoIframes("hamstring workout", $("#videoContainer"));
  });

  $("#Calve").on("click", function(){
    $(".bodypart").hide();
    $(".rear-leg-image").animate({top: "400px"}, 500).fadeOut();
    $("#rear-leg-text").hide();
    $("#videoContainer").show();
    getAndAppendVideoIframes("calve workout", $("#videoContainer"));
  });

  $("#rear-leg-text").on("click", function(){
    $(".bodypart").hide();
    $(".front-leg-image").animate({top: "400px"}, 500).fadeOut();
    $(".rear-leg-image").fadeIn();
    $("#Hamstring").show();
    $("#Calve").show();
    $("#rear-leg-text").hide();
  });

});
