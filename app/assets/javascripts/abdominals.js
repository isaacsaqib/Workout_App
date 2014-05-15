$(document).ready(function(){
  $("#Abdominals").on("click", function(){
    $(".torso").animate({right: "400px"}, 500).fadeOut();
    $(".bodypart").hide();
    $("#rear-torso-text").hide();
    getAndAppendVideoIframes("abdominals workout", $("#videoContainer"));
    $("#videoContainer").show();
  });
});

