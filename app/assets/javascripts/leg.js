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


function getResultsQuad() {
      $.getJSON(quadapi).done(function(data) {
        data.data.items.forEach(function(link) {
          var newLink = link.player.default.replace("watch?v=", "embed/").replace("&feature=youtube_gdata_player", "").replace("http:", "");
          $("<iframe>").attr("src", newLink).attr("width", 260).attr("height", 115).appendTo("#videoContainer");
          });
     });
    }
  var quadapi = "http://gdata.youtube.com/feeds/api/videos/?v=2&alt=jsonc&q=quad%20workout&max-results=4";

function getResultsTibialis() {
      $.getJSON(tibialisapi).done(function(data) {
        data.data.items.forEach(function(link) {
          var newLink = link.player.default.replace("watch?v=", "embed/").replace("&feature=youtube_gdata_player", "").replace("http:", "");
          $("<iframe>").attr("src", newLink).attr("width", 260).attr("height", 115).appendTo("#videoContainer");
          });
     });
    }
  var tibialisapi = "http://gdata.youtube.com/feeds/api/videos/?v=2&alt=jsonc&q=tibialis%20workout&max-results=4";

  function getResultsCalve() {
      $.getJSON(calveapi).done(function(data) {
        data.data.items.forEach(function(link) {
          var newLink = link.player.default.replace("watch?v=", "embed/").replace("&feature=youtube_gdata_player", "").replace("http:", "");
          $("<iframe>").attr("src", newLink).attr("width", 260).attr("height", 115).appendTo("#videoContainer");
          });
     });
    }
  var calveapi = "http://gdata.youtube.com/feeds/api/videos/?v=2&alt=jsonc&q=calve%20workout&max-results=4";

 function getResultsHamstring() {
      $.getJSON(hamstringapi).done(function(data) {
        data.data.items.forEach(function(link) {
          var newLink = link.player.default.replace("watch?v=", "embed/").replace("&feature=youtube_gdata_player", "").replace("http:", "");
          $("<iframe>").attr("src", newLink).attr("width", 260).attr("height", 115).appendTo("#videoContainer");
          });
     });
    }
  var hamstringapi = "http://gdata.youtube.com/feeds/api/videos/?v=2&alt=jsonc&q=hamstring%20workout&max-results=4";

  $("#Right-Leg").on("click", function(){
    $(".torso").animate({right: "400px"}, 500).fadeOut();
    $(".bodypart").hide();
    $(".front-leg-image").fadeIn(3000);
    $("#Tibialis").show();
    $("#Quad").show();
    $("#rear-leg-text").fadeIn(3000);
    $("#rear-torso-text").hide();


  });

  $("#Left-Leg").on("click", function(){
    $(".torso").animate({right: "400px"}, 500).fadeOut();
    $(".bodypart").hide();
    $(".front-leg-image").fadeIn(3000);
    $("#Tibialis").show();
    $("#Quad").show();
    $("#rear-leg-text").fadeIn(3000);
    $("#rear-torso-text").hide();

  });

  $("#Quad").on("click", function(){
    $(".bodypart").hide();
    $(".front-leg-image").animate({top: "400px"}, 500).fadeOut();
    $("#rear-leg-text").hide();
    $("#videoContainer").show();
    getResultsQuad();
  });


  $("#Tibialis").on("click", function(){
    $(".bodypart").hide();
    $(".front-leg-image").animate({top: "400px"}, 500).fadeOut();
    $("#rear-leg-text").hide();
    $("#videoContainer").show();
    getResultsTibialis();


  });

      $("#Hamstring").on("click", function(){
      $(".bodypart").hide();
      $(".rear-leg-image").animate({top: "400px"}, 500).fadeOut();
      $("#rear-leg-text").hide();
      $("#videoContainer").show();
      getResultsHamstring();

  });

    $("#Calve").on("click", function(){
      $(".bodypart").hide();
      $(".rear-leg-image").animate({top: "400px"}, 500).fadeOut();
      $("#rear-leg-text").hide();
      $("#videoContainer").show();
      getResultsCalve();


    });



  $("#rear-leg-text").on("click", function(){
     $(".bodypart").hide();
    $(".front-leg-image").animate({top: "400px"}, 500).fadeOut();
    $(".rear-leg-image").fadeIn();
    $("#Hamstring").show();
    $("#Calve").show();
  });


});
