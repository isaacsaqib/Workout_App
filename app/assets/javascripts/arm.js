$(document).ready(function(){
  function getResultsBicep() {
      $.getJSON(bicepapi).done(function(data) {
        // debugger;
        data.data.items.forEach(function(link) {
          var newLink = link.player.default.replace("watch?v=", "embed/").replace("&feature=youtube_gdata_player", "").replace("http:", "");
          // var newTitle = $("<p>").text(link.title);
          var video = $("<iframe>").addClass("video").attr("src", newLink).attr("width", 260).attr("height", 115).append('<br>');
          // newTitle.appendTo("#videoContainer");
          video.appendTo("#videoContainer");
          });
     });
    }
  var bicepapi = "http://gdata.youtube.com/feeds/api/videos/?v=2&alt=jsonc&q=bicep%20workout&max-results=10";

function getResultsForearm() {
      $.getJSON(forearmapi).done(function(data) {
        data.data.items.forEach(function(link) {
          var newLink = link.player.default.replace("watch?v=", "embed/").replace("&feature=youtube_gdata_player", "").replace("http:", "");
          $("<iframe>").attr("src", newLink).attr("width", 260).attr("height", 115).appendTo("#videoContainer");
          });
     });
    }
  var forearmapi = "http://gdata.youtube.com/feeds/api/videos/?v=2&alt=jsonc&q=forearm%20workout&max-results=4";

  function getResultsTricep() {
      $.getJSON(tricepapi).done(function(data) {
        data.data.items.forEach(function(link) {
          var newLink = link.player.default.replace("watch?v=", "embed/").replace("&feature=youtube_gdata_player", "").replace("http:", "");
          $("<iframe>").attr("src", newLink).attr("width", 260).attr("height", 115).appendTo("#videoContainer");
          });
     });
    }
  var tricepapi = "http://gdata.youtube.com/feeds/api/videos/?v=2&alt=jsonc&q=tricep%20workout&max-results=4";


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
    getResultsBicep();



  });

  $("iframe").on("mouseover", function(){
    $("#videoContainer").css("opacity", .4);

  });


  $("#Tricep").on("click", function(){
    $(".arm-image").animate({top: "400px"}, 500).fadeOut();
    $("#Bicep").hide();
    $("#Tricep").hide();
    $("#videoContainer").show();
    getResultsTricep();




  });

  $("#Forearm").on("click", function(){
    $(".arm-image").animate({top: "400px"}, 500).fadeOut();
    $(".bodypart").hide();
    $("#videoContainer").show();
    getResultsForearm();

  });





});
