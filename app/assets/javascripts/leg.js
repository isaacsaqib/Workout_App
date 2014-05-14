$(document).ready(function(){
  $("#Quad").hide();
  $("#Tibialis").hide();
  $("#Hamstring").hide();
  $("#Calve").hide();
  $("#leg-text").hide();
  $(".front-leg-image").hide();
  $(".rear-leg-image").hide();
  $("#rear-leg-text").hide();




  $("#Right-Leg").on("click", function(){
  $(".torso").animate({right: "400px"}, 500).fadeOut();
  $("#Left-Chest").hide();
  $("#Right-Chest").hide();
  $("#Left-Arm").hide();
  $("#Right-Arm").hide();
  $("#Left-Leg").hide();
  $("#Right-Leg").hide();
  $("#Abdominals").hide();
  $(".front-leg-image").fadeIn(3000);
  $("#Tibialis").show();
  $("#Quad").show();
  $("#rear-leg-text").fadeIn(3000);
   $("#rear-torso-text").hide();

  });

  $("#Left-Leg").on("click", function(){
  $(".torso").animate({right: "400px"}, 500).fadeOut();
  $("#Left-Chest").hide();
  $("#Right-Chest").hide();
  $("#Left-Arm").hide();
  $("#Right-Arm").hide();
  $("#Left-Leg").hide();
  $("#Right-Leg").hide();
  $("#Abdominals").hide();
  $(".front-leg-image").fadeIn(3000);
  $("#Tibialis").show();
  $("#Quad").show();
  $("#rear-leg-text").fadeIn(3000);
   $("#rear-torso-text").hide();

  });

  $("#Quad").on("click", function(){
    $("#Quad").hide();
    $("#Tibialis").hide();
    $("#Hamstring").hide();
    $(".front-leg-image").animate({top: "400px"}, 500).fadeOut();
    $("#rear-leg-text").hide();

  });


  $("#Tibialis").on("click", function(){
    $("#Quad").hide();
    $("#Tibialis").hide();
    $("#Hamstring").hide();
    $("#Calve").hide();
    $(".front-leg-image").animate({top: "400px"}, 500).fadeOut();
    $("#rear-leg-text").hide();




  });

      $("#Hamstring").on("click", function(){
      $("#Quad").hide();
      $("#Tibialis").hide();
      $(".rear-leg-image").animate({top: "400px"}, 500).fadeOut();
      $("#rear-leg-text").hide();
      $("#Hamstring").hide();
      $("#Calve").hide();
  });

    $("#Calve").on("click", function(){
      $("#Quad").hide();
      $("#Tibialis").hide();
      $(".rear-leg-image").animate({top: "400px"}, 500).fadeOut();
      $("#rear-leg-text").hide();
      $("#Hamstring").hide();
      $("#Calve").hide();


    });



  $("#rear-leg-text").on("click", function(){
    $("#Quad").hide();
    $("#Tibialis").hide();
    $(".front-leg-image").animate({top: "400px"}, 500).fadeOut();
    $(".rear-leg-image").fadeIn();
    $("#Hamstring").show();
    $("#Calve").show();
  });


});
