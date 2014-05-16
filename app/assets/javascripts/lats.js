$(document).ready(function(){
  $("#Right-Lat").hide();
  $("#Left-Lat").hide();
  $("#Rhomboids").hide();
  $("#Lower-Back").hide();
  $("#Trapezius").hide();


  $("#Right-Lat").on("click", function(){
    $(".bodypart").hide();
    $(".rear-torso-image").animate({top: "400px"}, 500).fadeOut();
    $("#videoContainer").show();
    getAndAppendVideoIframes("lat workout", $("#videoContainer"));
  });

   $("#Left-Lat").on("click", function(){
    $(".bodypart").hide();
    $(".rear-torso-image").animate({top: "400px"}, 500).fadeOut();
    $("#videoContainer").show();
    getAndAppendVideoIframes("lat workout", $("#videoContainer"));

  });


    $("#Lower-Back").on("click", function(){
    $(".bodypart").hide();
    $(".rear-torso-image").animate({top: "400px"}, 500).fadeOut();
    $("#videoContainer").show();
    getAndAppendVideoIframes("lower back workout", $("#videoContainer"));

  });

    $("#Rhomboids").on("click", function(){
    $(".bodypart").hide();
    $(".rear-torso-image").animate({top: "400px"}, 500).fadeOut();
    $("#videoContainer").show();
    getAndAppendVideoIframes("rhomboids workout", $("#videoContainer"));

  });


    $("#Trapezius").on("click", function(){
    $(".bodypart").hide();
    $(".rear-torso-image").animate({top: "400px"}, 500).fadeOut();
    $("#videoContainer").show();
    getAndAppendVideoIframes("trapezius workout", $("#videoContainer"));

  });


});

