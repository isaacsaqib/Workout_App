$(document).ready(function(){
  $("#videoContainer").hide();


  $("#Left-Chest").on("click", function(){
    $(".torso").css("position", "absolute").css("top", "100px").css("left", "400px").animate({left: "900px"}, 500).fadeOut();
    $(".bodypart").hide();
    $("#rear-torso-text").hide();
    getAndAppendVideoIframes("chest workout", $("#videoContainer"));
    $("#videoContainer").show();
  });


  $("#Right-Chest").on("click", function(){
    $(".torso").css("position", "absolute").css("top", "100px").css("left", "400px").animate({left: "900px"}, 500).fadeOut();
    $(".bodypart").hide();
    $("#rear-torso-text").hide();
    $("#videoContainer").show();
    getAndAppendVideoIframes("chest workout", $("#videoContainer"));

  });

});


