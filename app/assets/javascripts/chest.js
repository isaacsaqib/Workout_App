$(document).ready(function(){
  $("#videoContainer").hide();


  $("#Left-Chest").on("click", function(){
    $(".torso").animate({right: "400px"}, 500).fadeOut();
    $(".bodypart").hide();
    $("#rear-torso-text").hide();
    getAndAppendVideoIframes("chest workout", $("#videoContainer"));
    $("#videoContainer").show();
  });


  $("#Right-Chest").on("click", function(){
    $(".torso").animate({right: "400px"}, 500).fadeOut();
    $(".bodypart").hide();
    $("#rear-torso-text").hide();
    getResultsChest();
    $("#videoContainer").show();
  });

});


