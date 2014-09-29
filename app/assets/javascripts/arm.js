$(document).ready(function(){
  $("#videoContainer").hide();
  $(".arm-image").hide();
  $("#Bicep").hide();
  $("#Tricep").hide();
  $("#Forearm").hide();
  $("#Shoulder").hide();
  $("#arm-image-preview-container").hide();

  $("#Right-Arm").on("click", function(){
    $(".arm-image").fadeIn();
    $(".torso").css("position", "absolute").css("top", "100px").css("left", "400px").animate({left: "900px"}, 500).fadeOut();
    $(".bodypart").hide();
    $("#Bicep").show();
    $("#Tricep").show();
    $("#Forearm").show();
    $("#Shoulder").show();
    $("#back-view").hide();
    $("#return").hide();

  });

  $("#Right-Arm").on("mouseover", function(){
    $("#arm-image-preview-container").fadeIn();
  });

  $("#Right-Arm").on("mouseleave", function(){
    $("#arm-image-preview-container").hide();
  });

  $("#Left-Arm").on("mouseover", function(){
    $("#arm-image-preview-container").fadeIn();
  });

  $("#Left-Arm").on("mouseleave", function(){
    $("#arm-image-preview-container").hide();
  });


 $("#Left-Arm").on("click", function(){
    $(".arm-image").fadeIn();
    $(".torso").css("position", "absolute").css("top", "100px").css("left", "400px").animate({left: "900px"}, 500).fadeOut();
    $(".bodypart").hide();
    $("#Bicep").show();
    $("#Tricep").show();
    $("#Forearm").show();
    $("#Shoulder").show();
    $("#back-view").hide();
    $("#return").hide();

  });

  $("#Bicep").on("click", function(){
    $(".arm-image").animate({top: "400px"}, 500).fadeOut();
    $(".bodypart").hide();
    $("#videoContainer").show();
    $("#return").hide();
    getAndAppendVideoIframes("bicep workout", $("#videoContainer"));
  });

  $("#Tricep").on("click", function(){
    $(".arm-image").animate({top: "400px"}, 500).fadeOut();
    $("#Bicep").hide();
    $("#Tricep").hide();
    $("#videoContainer").show();
    $("#return").hide();

    getAndAppendVideoIframes("tricep workout", $("#videoContainer"));
  });

  $("#Forearm").on("click", function(){
    $(".arm-image").animate({top: "400px"}, 500).fadeOut();
    $(".bodypart").hide();
    $("#videoContainer").show();
    $("#return").hide();

    getAndAppendVideoIframes("forearm workout", $("#videoContainer"));
  });

  $("#Shoulder").on("click", function(){
      $(".arm-image").animate({top: "400px"}, 500).fadeOut();
      $(".bodypart").hide();
      $("#videoContainer").show();
      $("#return").hide();

      getAndAppendVideoIframes("shoulder workout", $("#videoContainer"));
  });


});
