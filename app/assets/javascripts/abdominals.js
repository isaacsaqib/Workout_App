$(document).ready(function(){
  $("#Abdominals").on("click", function(){
    $(".torso").css("position", "absolute").css("top", "100px").css("left", "400px").animate({left: "900px"}, 500).fadeOut();
    $(".bodypart").hide();
    $("#back-view").hide();
    getAndAppendVideoIframes("abdominals workout", $("#ninja"));
    $("#videoContainer").show();
    $("#return").hide();

  });
});

