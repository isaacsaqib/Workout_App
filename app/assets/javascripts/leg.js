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
  $("#leg-image-preview-container").hide();

  $("#Right-Leg").on("click", function(){
    $(".torso").css("position", "absolute").css("top", "100px").css("left", "400px").animate({left: "900px"}, 500).fadeOut();
    $(".bodypart").hide();
    $(".front-leg-image").fadeIn();
    $("#Tibialis").show();
    $("#Quad").show();
    $("#rear-leg-text").show();
    $("#back-view").hide();
    $("#return").hide();
    $("#return-rear-leg").show();


  });

   $("#Right-Leg").on("mouseover", function(){
    $("#leg-image-preview-container").fadeIn();
  });

  $("#Right-Leg").on("mouseleave", function(){
    $("#leg-image-preview-container").hide();
  });

  $("#Left-Leg").on("mouseover", function(){
    $("#leg-image-preview-container").fadeIn();
  });

  $("#Left-Leg").on("mouseleave", function(){
    $("#leg-image-preview-container").hide();
  });

  $("#Left-Leg").on("click", function(){
    $(".torso").css("position", "absolute").css("top", "100px").css("left", "400px").animate({left: "900px"}, 500).fadeOut();
    $(".bodypart").hide();
    $(".front-leg-image").fadeIn();
    $("#Tibialis").show();
    $("#Quad").show();
    $("#rear-leg-text").show();
    $("#back-view").hide();
    $("#return").hide();
    $("#return-rear-leg").show();


  });

  $("#Quad").on("click", function(){
    $(".bodypart").hide();
    $("#return").hide();
    $("#return-rear-leg").hide();
    $(".front-leg-image").animate({top: "400px"}, 500).fadeOut();
    $("#rear-leg-text").hide();
    $("#videoContainer").show();
    getAndAppendVideoIframes("quad workout", $("#videoContainer"));
  });

  $("#Tibialis").on("click", function(){
    $(".bodypart").hide();
    $("#return").hide();
    $("#return-rear-leg").hide();
    $(".front-leg-image").animate({top: "400px"}, 500).fadeOut();
    $("#rear-leg-text").hide();
    $("#videoContainer").show();
    getAndAppendVideoIframes("tibialis workout", $("#videoContainer"));
  });

  $("#Hamstring").on("click", function(){
    $(".bodypart").hide();
    $("#return").hide();
    $("#return-rear-leg").hide();
    $(".rear-leg-image").animate({top: "400px"}, 500).fadeOut();
    $("#rear-leg-text").hide();
    $("#videoContainer").show();
    getAndAppendVideoIframes("hamstring workout", $("#videoContainer"));
  });

  $("#Calve").on("click", function(){
    $(".bodypart").hide();
    $("#return").hide();
    $("#return-rear-leg").hide();
    $(".rear-leg-image").animate({top: "400px"}, 500).fadeOut();
    $("#rear-leg-text").hide();
    $("#videoContainer").show();
    getAndAppendVideoIframes("calve workout", $("#videoContainer"));
  });

  $("#rear-leg-text").on("click", function(){
    $(".bodypart").hide();
    $("#return").hide();
    $("#return-rear-leg").hide();
    $(".front-leg-image").animate({top: "400px"}, 500).fadeOut();
    $(".rear-leg-image").fadeIn();
    $("#Hamstring").show();
    $("#Calve").show();
    $("#rear-leg-text").hide();
  });

});
